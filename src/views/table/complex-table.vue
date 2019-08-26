<template>
  <div class="app-container">
    <el-table
      fit
      ref="dragTable"
      v-loading="listLoading"
      :data="list"
      border
      style="width: 100%"
      @sort-change="sortChange">
      <el-table-column
        sortable="custom"
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
        width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>  
      </el-table-column>
      <el-table-column
        prop="title"
        :label="$t('table.title')"
        min-width="150">
        <template slot-scope="{row}">
          <span class="link-type" @click="handleUpdate(row)" >{{ row.title }}</span>
          <el-tag>{{ row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="author"
        :label="$t('table.author')"
        width="80">
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
        width="70">
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
        prop="action"
        :label="$t('table.actions')"
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

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form :model="temp" ref="dataForm" :rules="rules" label-position="left" label-width="70px" style="width: 400px; margin-left: 50px;">
        <el-form-item :label="$t('table.type')" prop="type">
          <el-select v-model="temp.type" placeholder="Please select">
            <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name" :value="item.key"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('table.date')" prop="timestamp">
              <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="Please pick a date"></el-date-picker>
        </el-form-item>        
        <el-form-item :label="$t('table.title')" prop="title">
          <el-input v-model="temp.title"></el-input>
        </el-form-item>
        <el-form-item :label="$t('table.status')">
          <el-select v-model="temp.status" placeholder="Please select">
            <el-option v-for="item in statusOptions" :key="item.key" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('table.importance')">
          <el-rate v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max="3" style="margin-top: 8px;"></el-rate>
        </el-form-item>
        <el-form-item :label="$t('table.remark')">
          <el-input v-model="temp.remark"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          {{ $t('table.cancel') }}
        </el-button>
        <el-button type="primary" @click="dialogStatus === 'create' ? createData():updateData()">
          {{ $t('table.confirm') }}
        </el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>

import { fetchList, createArticle, updateArticle } from '@/api/article'
import Pagination from '@/components/pagination'
import Sortable from 'sortablejs'

const calendarTypeOptions = [
  { key: 'CN', display_name: 'China' },
  { key: 'US', display_name: 'USA' },
  { key: 'JP', display_name: 'Japan' },
  { key: 'EU', display_name: 'Eurozone' }
]

const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  console.log(acc, cur)
  acc[cur.key] = cur.display_name
  return acc
}, {})

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
        },
        typeFilter(type){
          return calendarTypeKeyValue[type]
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
            limit: 20,
            importance: undefined,
            title: undefined,
            type: undefined,
            sort: '+id'
          },
          calendarTypeOptions,
          statusOptions: ['published', 'draft', 'deleted'],
          temp: {
            id: undefined,
            importance: 1,
            remark: '',
            timestamp: new Date(),
            title: '',
            type: '',
            status: 'published'
          },
          dialogFormVisible: false,
          dialogStatus: '',
          sortable: null,
          rules: {
            type: [{
              required: true,
              message: 'type is required',
              trigger: 'change'
            }],
            timestamp: [{
              type: 'date',
              required: true,
              message: 'timestamp is required',
              trigger: 'change'
            }],
            title: [{
              required: true,
              message: 'title is required',
              trigger: 'blur'
            }]
          },
          textMap: {
            update: 'Edit',
            create: 'Create'
          }
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
          setTimeout(() => {
            this.listLoading = false
          }, 1.5 * 1000) 

          this.$nextTick(() => {
            this.setSort()
          })
        },
        handleFilter(){
          this.listQuery.page = 1
          this.getList()
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
        },
        sortChange(data){
          // console.log(data)
          const { prop, order } = data
          if(prop === 'id'){
            this.sortByID(order)
          }
        },
        sortByID(order){
          if(order === 'ascending'){
            this.listQuery.sort = '+id'
          } else {
            this.listQuery.sort = '-id'
          }

          this.handleFilter()
        },
        createData(){
          this.$refs['dataForm'].validate((valid) => {
            if(valid){
              this.temp.id = parseInt(Math.random() * 100) + 1024   //mock 一个 id
              this.temp.author = 'vue-elment-admin'
              createArticle(this.temp).then(() => {
                this.list.unshift(this.temp)
                this.dialogFormVisible = false
                this.$notify({
                  title: '成功',
                  message: '创建成功',
                  type: 'success',
                  duration: 2000
                })
              })
            }
          })
        },
        handleUpdate(row){
          this.temp = Object.assign({}, row)
          this.temp.timestamp = new Date(this.temp.timestamp)
          this.dialogStatus = 'update'
          this.dialogFormVisible = true
          this.$nextTick(() => {
            this.$refs['dataForm'].clearValidate()
          })
        },
        updateData(){
          this.$refs['dataForm'].validate((valid) => {
            if(valid) {
              const tempData = Object.assign({}, this.temp)
              tempData.timestamp = +new Date(tempData.timestamp)
              updateArticle(tempData).then(() => {
                for(const v of this.list){
                  if(v.id === this.temp.id){
                    const index = this.list.indexOf(v)
                    this.list.splice(index, 1, this.temp)
                    break
                  }
                }
                this.dialogFormVisible = false
                this.$notify({
                  title: '成功',
                  message: '更新成功',
                  type: 'success',
                  duration: 2000
                })
              })
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