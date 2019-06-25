<template>
    <div class="app-container">
    <el-button type="primary" @click="dialogFormVisible = true">
        {{ $t('permission.addRole') }}
    </el-button>
    <!-- table -->
    <el-table :data="rolesList" style="width: 100%; margin-top:30px;" border>
        <el-table-column label="Role Key" width="220" align="center">
            <template slot-scope="scope">
                {{ scope.row.date }}
            </template>
        </el-table-column>
        <el-table-column label="Role Name" width="220" align="center">
            <template slot-scope="scope">
                {{ scope.row.name }}
            </template>
        </el-table-column>
        <el-table-column label="Description" align="center">
            <template slot-scope="scope">
                {{ scope.row.address }}
            </template>
        </el-table-column>
        <el-table-column label="Operations" align="center">
            <template slot-scope="scope">
                <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">
                    {{ $t('permission.editPermission') }}
                </el-button>
                <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">
                    {{ $t('permission.delete') }}
                </el-button>
            </template>
        </el-table-column>
    </el-table>

    <!-- dialog -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
    <el-form :model="form">
        <el-form-item label="Name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" placeholder="Role Name"></el-input>
        </el-form-item>
        <el-form-item label="Desc" :label-width="formLabelWidth">
        <el-input v-model="form.region" type="textarea" autocomplete="off" placeholder="Role Description"></el-input>
        </el-form-item>
        <el-form-item label="Menus">
          <el-tree show-checkbox node-key="path" class="permission-tree" />
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button type="danger" @click="dialogFormVisible = false">
            {{ $t('permission.cancel') }}
        </el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
            {{ $t('permission.confirm') }}
        </el-button>
    </div>
    </el-dialog>    
    </div>
</template>
<script>
import { getRoles } from '@/api/role'

export default {
    name: 'RolePermission',
    data() {
        return {
            rolesList: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
            }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
            }],
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
            },
            formLabelWidth: '120px'
        }
    },
    created() {
        // Mock: get all routes and roles list from server
        this.getRoles()
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      async getRoles() {
          const res = await getRoles()
          this.rolesList = res.data
      }
    }    
}
</script>
<style lang="scss" scoped>

</style>

