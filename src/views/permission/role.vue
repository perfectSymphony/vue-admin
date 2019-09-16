<template>
  <div class="app-container">
    <el-button type="primary" @click="handleAddRole">
      {{ $t('permission.addRole') }}
    </el-button>

    <!-- table -->
    <el-table :data="rolesList" style="width: 100%; margin-top:30px;" border>
      <el-table-column label="Role Key" width="220" align="center">
        <template slot-scope="scope">
          {{ scope.row.key }}
        </template>
      </el-table-column>
      <el-table-column label="Role Name" width="220" align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="Description" align="center">
        <template slot-scope="scope">
          {{ scope.row.description }}
        </template>
      </el-table-column>
      <el-table-column label="Operations" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope)">
            {{ $t('permission.editPermission') }}
          </el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope)">
            {{ $t('permission.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- dialog -->
    <el-dialog :title="dialogType === 'edit' ? 'Edit Role':'New Role'" :visible.sync="dialogVisible">
      <el-form :model="role" label-width="80px" label-position="left">
        <el-form-item label="Name">
          <el-input v-model="role.name" autocomplete="off" placeholder="Role Name" />
        </el-form-item>
        <el-form-item label="Desc">
          <el-input v-model="role.description" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" autocomplete="off" placeholder="Role Description" />
        </el-form-item>
        <el-form-item label="Menus">
          <el-tree ref="tree" :check-strictly="checkStrictly" :data="routesData" show-checkbox node-key="path" :props="defaultProps" class="permission-tree" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="danger" @click="dialogVisible = false">
          {{ $t('permission.cancel') }}
        </el-button>
        <el-button type="primary" @click="confirmRole">
          {{ $t('permission.confirm') }}
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import path from 'path'
import { deepClone } from '@/utils'
import { getRoutes, getRoles, deleteRole, updateRole, addRole } from '@/api/role'
import i18n from '@/lang'

const defaultRole = {
  key: '',
  name: '',
  description: '',
  routes: []
}

export default {
  name: 'RolePermission',
  data() {
    return {
      defaultProps: {
        children: 'children',
        label: 'title'
      },
      rolesList: [],
      routes: [],
      checkStrictly: false,
      dialogVisible: false,
      role: Object.assign({}, defaultRole),
      dialogType: 'new'
    }
  },
  computed: {
    // 在dom加载后马上执行的,其实就是在mounted的时候阶段执行。这个是一个计算属性，触发的时候不需要条件
    routesData() {
      return this.routes
    }
  },
  created() {
    // Mock: get all routes and roles list from server
    this.getRoutes()
    this.getRoles()
  },
  methods: {
    async getRoles() {
      const res = await getRoles()
      this.rolesList = res.data
    },
    async getRoutes() {
      const res = await getRoutes()
      this.serviceRoutes = res.data
      const routes = this.generateRoutes(res.data)
      this.routes = this.i18n(routes)
    },
    i18n(routes) {
      const app = routes.map(route => {
        route.title = i18n.t(`route.${route.title}`)
        if (route.children) {
          route.children = this.i18n(route.children)
        }
        return route
      })
      return app
    },
    // Reshape the routes structure so that it looks the same as the sidebar
    generateRoutes(routes, basePath = '/') {
      const res = []

      for (let route of routes) {
        //   跳过指定的路由
        if (route.hidden) { continue }

        const onlyOneShowingChild = this.onlyOneShowingChild(route.children, route)

        if (route.children && onlyOneShowingChild && !route.alwaysShow) {
          route = onlyOneShowingChild
        }

        const data = {
          path: path.resolve(basePath, route.path),
          title: route.meta && route.meta.title
        }

        // 递归生成子路由
        if (route.children) {
          data.children = this.generateRoutes(route.children, data.path)
        }
        res.push(data)
      }
      return res
    },
    handleAddRole() {
      this.role = Object.assign({}, defaultRole)
      if (this.$refs.tree) {
        this.$refs.tree.setCheckedNodes([])
      }
      this.dialogType = 'new'
      this.dialogVisible = true
    },
    handleEdit(scope) {
      this.dialogType = 'edit'
      this.dialogVisible = true
      this.checkStrictly = true
      this.role = deepClone(scope.row)
      this.$nextTick(() => {
        const routes = this.generateRoutes(this.role.routes)
        this.$refs.tree.setCheckedNodes(this.generateRoutes(routes))
        // set checked state of a node not affects its father and child nodes
        this.checkStrictly = false
      })
    },
    handleDelete({ $index, row }) {
      this.$confirm('Confirm to remove the role?', 'Warning', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'cancel',
        type: 'warning'
      }).then(async() => {
        await deleteRole(row.key)
        this.rolesList.splice($index, 1)
        this.$message({
          type: 'success',
          message: 'Delete succed!'
        })
      }).catch(err => {
        console.error(err)
      })
    },
    generateTree(routes, basePath = '/', checkedKeys) {
      const res = []

      for (const route of routes) {
        const routePath = path.resolve(basePath, route.path)

        // 递归子路由
        if (route.children) {
          route.children = this.generateTree(route.children, routePath, checkedKeys)
        }

        if (checkedKeys.includes(routePath) || (route.children && route.children.length >= 1)) {
          res.push(route)
        }
      }
      return res
    },
    async confirmRole() {
      const isEdit = this.dialogType === 'edit'

      const checkedKeys = this.$refs.tree.getCheckedKeys()
      this.role.routes = this.generateTree(deepClone(this.serviceRoutes), '/', checkedKeys)

      if (isEdit) {
        await updateRole(this.role.key, this.role)
        for (let index = 0; index < this.rolesList.length; index++) {
          if (this.rolesList[index].key === this.role.key) {
            this.rolesList.splice(index, 1, Object.assign({}, this.role))
            break
          }
        }
      } else {
        const { data } = await addRole(this.role)
        this.role.key = data.key
        this.rolesList.push(this.role)
      }

      const { description, key, name } = this.role
      this.dialogVisible = false
      this.$notify({
        title: 'Success',
        dangerouslyUseHTMLString: true,
        message: `
                    <div>Role key: ${key}</div>
                    <div>Role Name: ${name}</div>
                    <div>Description: ${description}</div>
              `,
        type: 'success'
      })
    },
    // reference: src/view/layout/components/Sidebar/SidebarItem.vue
    onlyOneShowingChild(children = [], parent) {
      let onlyOneChild = null
      const showingChildren = children.filter(item => !item.hidden)

      // When there is only one child route, the child route is displayed by default
      if (showingChildren.length === 1) {
        onlyOneChild = showingChildren[0]
        onlyOneChild.path = path.resolve(parent.path, onlyOneChild.path)
        return onlyOneChild
      }

      // Show parent if there are no child route to display
      if (showingChildren.length === 0) {
        onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return onlyOneChild
      }

      return false
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container {
    .permission-tree {
        margin-top: 30px;
    }
}
</style>

