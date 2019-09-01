<template>
  <div class="components-container">
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
        :label="$t('table.id')"
        width="80">
        <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="date"
        :label="$t('table.date')"
        width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>  
      </el-table-column>
      <el-table-column
        prop="title"
        :label="$t('table.title')">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="author"
        :label="$t('table.author')"
        width="100">
        <template slot-scope="scope">
            <span>{{ scope.row.author }}</span>
        </template>  
      </el-table-column>
      <el-table-column
        align="center"
        prop="importance"
        :label="$t('table.importance')"
        width="100">
        <template slot-scope="scope">
              <svg-icon v-for="i in scope.row.importance" :key="i" icon-class="star" class="icon-star" />
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="readings"
        :label="$t('table.readings')"
        width="150">
        <template slot-scope="scope">
            <span>{{ scope.row.pageviews }}</span>
        </template>  
      </el-table-column>
      <el-table-column
        align="center"
        prop="status"
        class-name="status-col"
        :label="$t('table.status')"
        width="90">
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
        width="100">
        <template slot-scope="scope">
            <router-link :to="'/example/edit/'+scope.row.id">
                <el-button type="primary" size="small" icon="el-icon-edit">
                  Edit
                </el-button>              
            </router-link>
        </template>  
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

  </div>
</template>

<script>

import { fetchList } from '@/api/article'
import Sortable from 'sortablejs'
import Pagination from '@/components/pagination'

export default {
      name: 'DragTable',
      components: {
        Pagination
      },
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
      data(){
        return {
          list: null,
          total: 0,
          listLoading: true,
          listQuery: {
            page: 1,
            limit: 10
          },
          sortable: null,
          oldList: [],
          newList: []
        }
      },
      created() {
        this.getList()
      },
      methods: {
        async getList(){
          this.listLoading = true
          const { data } = await fetchList(this.listQuery)
          this.list = data.items
          // console.log(this.list)
          this.total = data.total
          this.listLoading = false
          this.$nextTick(() => {
            this.setSort()
          })
        },
        setSort(){
          // console.log(this.$refs.dragTable.$el)
          const el = this.$refs.dragTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
          // console.log(el)
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
  .drag-handler {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .show-d{
    margin-top: 15px;
  }

</style>