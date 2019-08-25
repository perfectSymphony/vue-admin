<template>
  <div class="app-container">
    <el-table
      fit
      ref="dragTable"
      v-loading="listLoading"
      :data="list"
      border
      style="width: 100%">
      <el-table-column
        align="center"
        prop="id"
        label="ID"
        width="70">
        <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="date"
        label="日期"
        width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>  
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题">
        <template slot-scope="{row}">
          <span>{{ row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="author"
        label="作者"
        width="80">
        <template slot-scope="scope">
            <span>{{ scope.row.author }}</span>
        </template>  
      </el-table-column>
      <el-table-column
        align="center"
        prop="importance"
        label="比重"
        width="100">
        <template slot-scope="scope">
              <svg-icon v-for="i in scope.row.importance" :key="i" icon-class="star" class="icon-star" />
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="readings"
        label="阅读量"
        width="70">
        <template slot-scope="scope">
            <span>{{ scope.row.pageviews }}</span>
        </template>  
      </el-table-column>
      <el-table-column
        align="center"
        prop="status"
        class-name="status-col"
        label="状态"
        width="90">
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
        width="230">
        <template slot-scope="{row}">
            <el-button type="primary" size="small">
                {{ $t('table.edit') }}
            </el-button>
            <el-button type="success" size="small">
                {{ $t('table.publish') }}
            </el-button>
            <el-button type="danger" size="small">
                {{ $t('table.delete') }}
            </el-button>
        </template>  
      </el-table-column>
    </el-table>

    <Pagination v-show="total > 0" :total="total" :page.sync = "listQuery.page" :limit.sync = "listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>

import { fetchList } from '@/api/article'
import Pagination from '@/components/pagination'
import Sortable from 'sortablejs'

export default {
      name: 'complexTable',
      filters: {
        statusFilter(status){
          const statusMap = {
            published: 'success',
            draft: 'info',
            deleted: 'danger'
          }
          // console.log(statusMap[status])
          return statusMap[status]
        }
      },
      components: {
        Pagination
      },
      data(){
        return {
          total: 0,
          list: null,
          listLoading: true,
          listQuery: {
            page: 1,
            limit: 20
          },
          sortable: null
        }
      },
      created() {
        this.getList()
      },
      methods: {
        async getList(){
          this.listLoading = true
          const { data } = await fetchList(this.listQuery)
          // console.log(data)
          const items = data.items
          this.total = data.total
          this.list = items.map(v => {
              return v
          })
        //   console.log(items)
          this.listLoading = false
          this.$nextTick(() => {
            this.setSort()
          })
        },
        setSort(){
        //   console.log(this.$refs.dragTable.$el)
          const el = this.$refs.dragTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
        //   console.log(el)
          this.sortable = Sortable.create(el, {
            ghostClass: 'sortable-ghost',
            setData: function(dataTransfer){
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
.edit-input {
  padding-right: 100px;
}

.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}

</style>