<template>
  <div class="components-container">
    <el-table
      ref="dragTable"
      v-loading="listLoading"
      fit
      :data="list"
      border
      style="width: 100%"
    >
      <el-table-column
        align="center"
        prop="id"
        label="ID"
        width="80"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="date"
        label="日期"
        width="180"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
      >
        <template slot-scope="{row}">
          <template v-if="row.edit">
            <el-input v-model="row.title" class="edit-input" size="small" />
            <el-button class="cancel-btn" size="small" icon="el-icon-refresh" type="warning" @click="cancelEdit(row)">
              cancel
            </el-button>
          </template>
          <span v-else>{{ row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="author"
        label="作者"
        width="100"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="importance"
        label="比重"
        width="100"
      >
        <template slot-scope="scope">
          <svg-icon v-for="i in scope.row.importance" :key="i" icon-class="star" class="icon-star" />
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="status"
        class-name="status-col"
        label="状态"
        width="90"
      >
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="action"
        label="操作"
        width="120"
      >
        <template slot-scope="{row}">
          <el-button v-if="row.edit" type="success" size="small" icon="el-icon-circle-check" @click="confirmEdit(row)">
            ok
          </el-button>
          <el-button v-else type="primary" size="small" icon="el-icon-edit" @click="row.edit = !row.edit">
            Edit
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import { fetchList } from '@/api/article'
import Sortable from 'sortablejs'

export default {
  name: 'TableInlineEdit',
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      // console.log(statusMap[status])
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      sortable: null
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      const { data } = await fetchList(this.listQuery)
      const items = data.items
      this.list = items.map(v => {
        this.$set(v, 'edit', false)
        v.originalTitle = v.title
        return v
      })
      //   console.log(items)
      this.listLoading = false
      this.$nextTick(() => {
        this.setSort()
      })
    },
    setSort() {
      //   console.log(this.$refs.dragTable.$el)
      const el = this.$refs.dragTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
      //   console.log(el)
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost',
        setData: function(dataTransfer) {
          dataTransfer.setData('Text', '')
        }
      })
    },
    cancelEdit(row) {
      // console.log(row)
      row.title = row.originalTitle
      row.edit = false
      this.$message({
        message: 'The title has been edited',
        type: 'success'
      })
    },
    confirmEdit(row) {
      row.edit = false
      row.originalTitle = row.title
      this.$message({
        message: 'The title has been edited',
        type: 'suceess'
      })
    }
  }
}
</script>

<style>
.sortable-ghost {
  opacity: .8;
  color: rgb(243, 13, 13) !important;
  background: #42b983 !important;
}
</style>

<style scoped>
.edit-input {
  padding-right: 100px;
}

.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}

</style>
