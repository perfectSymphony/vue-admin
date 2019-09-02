<template>
  <div class="app-container">
      <div>
          <el-button v-loading="listLoading" style="margin: 0 0 20px 20px;" type="primary" icon="document" @click="handleDownload">
              Export
          </el-button>
      </div>
    <el-table
      fit
      ref="dragTable"
      v-loading="listLoading"
      :data="list"
      border
      style="width: 100%"
      >
      <el-table-column
        align="center"
        prop="id"
        label="ID"
        width="80">
        <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="主要信息">
        <el-table-column
            align="center"
            prop="date"
            label="日期"
            width="180">
            <template slot-scope="scope">
            <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
            </template>  
        </el-table-column>
        <el-table-column
            prop="title"
            label="标题">
            <template slot-scope="scope">
            <span>{{ scope.row.title }}</span>
            </template>
        </el-table-column>
        <el-table-column
            align="center"
            prop="author"
            label="作者"
            width="100">
            <template slot-scope="scope">
                <el-tag>{{ scope.row.author }}</el-tag>
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
            width="150">
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
      </el-table-column>

      <el-table-column
        align="center"
        prop="drag"
        label="是否可拖拽"
        width="100">
        <template>
            <svg-icon class="drag-handler" icon-class="drag" />
        </template>  
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import { fetchList } from '@/api/article'
import Sortable from 'sortablejs'

export default {
      name: 'MergeHeader',
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
        },
        handleDownload(){
            this.listLoading = true
            // Excel 的导入导出都是依赖于js-xlsx来实现的。在 js-xlsx的基础上又封装了Export2Excel.js来方便导出数据。
            // 由于 Export2Excel不仅依赖js-xlsx还依赖file-saver和script-loader。
            // 由于js-xlsx体积还是很大的，导出功能也不是一个非常常用的功能，所以使用的时候建议使用懒加载
            import('@/vendor/Export2Excel').then(excel => {
                const multiHeader = [['Id', 'Main Information', '', '', '', '', '', 'Action' ]]
                const tHeader = ['', 'Date', 'Title', 'Author', 'importance', 'Readings', 'status', '']
                const filterVal = ['id', 'Date', 'title', 'author', 'importance', 'readings', 'status', 'action']
                const data = this.formatJson(filterVal, this.list)
                const merges = ['A1:A2', 'B1:G1', 'H1:H2']
                excel.export_json_to_excel({
                multiHeader,
                header: tHeader,
                merges,
                data
                })
                this.listLoading = false
            })
        },
        formatJson(filterVal, jsonData){
          return jsonData.map(v => filterVal.map(j => {
            if(j === 'timestamp'){
              return parseTime(v[j])
            } else {
              return v[j]
            }
          }))
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

.radio-label {
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 30px;
}

</style>

<style scoped>
  .drag-handler {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

</style>