<template>
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
      :label="$t('table.id')"
      width="80"
    >
      <template slot-scope="scope">
        <span>{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      prop="date"
      :label="$t('table.date')"
      width="180"
    >
      <template slot-scope="scope">
        <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="title"
      :label="$t('table.title')"
    >
      <template slot-scope="{row}">
        <span>{{ row.title }}</span>
        <el-tag>{{ row.type }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      prop="author"
      :label="$t('table.author')"
      width="100"
    >
      <template slot-scope="scope">
        <span>{{ scope.row.author }}</span>
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      prop="importance"
      :label="$t('table.importance')"
      width="100"
    >
      <template slot-scope="scope">
        <svg-icon v-for="i in scope.row.importance" :key="i" icon-class="star" class="icon-star" />
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      prop="readings"
      :label="$t('table.readings')"
      width="150"
    >
      <template slot-scope="scope">
        <span>{{ scope.row.pageviews }}</span>
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      prop="status"
      class-name="status-col"
      :label="$t('table.status')"
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
      prop="drag"
      :label="$t('table.actions')"
      width="100"
    >
      <template>
        <svg-icon class="drag-handler" icon-class="drag" />
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

import { fetchList } from '@/api/article'
import Sortable from 'sortablejs'

export default {
  name: 'DragTable',
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  props: {
    type: {
      type: String,
      default: 'CN'
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        type: this.type,
        sort: '+id'
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
      this.$emit('create')
      const { data } = await fetchList(this.listQuery)
      this.list = data.items
      this.total = data.total
      this.listLoading = false
      this.$nextTick(() => {
        this.setSort()
      })
    },
    setSort() {
      // console.log(this.$refs.dragTable.$el)
      const el = this.$refs.dragTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
      // console.log(el)
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost',
        setData: function(dataTransfer) {
          dataTransfer.setData('Text', '')
        }
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
  .drag-handler {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
</style>
