<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.title" :placeholder="$t('table.title')" clearable style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-select v-model="listQuery.importance" clearable :placeholder="$t('table.importance')" style="width: 90px;" class="filter-item">
        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />
      </el-select>
      <el-select v-model="listQuery.type" clearable :placeholder="$t('table.type')" style="width: 130px;" class="filter-item">
        <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
      </el-select>
      <el-select v-model="listQuery.sort" clearable style="width: 140px;" class="filter-item" @change="handleFilter">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key" />
      </el-select>
      <el-button type="primary" icon="el-icon-search" class="filter-item" @click="handleFilter">
        {{ $t('table.search') }}
      </el-button>
      <el-button type="primary" icon="el-icon-edit" class="filter-item" style="margin-left: 10px;" @click="handleCreate">
        {{ $t('table.add') }}
      </el-button>
      <el-button v-waves :loading="downloadLoading" type="primary" icon="el-icon-download" class="filter-item" @click="handleDownload">
        {{ $t('table.export') }}
      </el-button>
      <el-checkbox v-model="showReviewer" class="filter-item" style="margin-left: 15px;" @change="tableKey = tableKey + 1">
        {{ $t('table.reviewer') }}
      </el-checkbox>
    </div>

    <el-table
      :key="tableKey"
      ref="dragTable"
      v-loading="listLoading"
      fit
      :data="list"
      border
      style="width: 100%"
      @sort-change="sortChange"
    >
      <el-table-column
        sortable="custom"
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
        width="140"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        :label="$t('table.title')"
        min-width="150"
      >
        <template slot-scope="{row}">
          <span class="link-type" @click="handleUpdate(row)">{{ row.title }}</span>
          <el-tag>{{ row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="author"
        :label="$t('table.author')"
        width="80"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-if="showReviewer"
        align="center"
        :label="$t('table.reviewer')"
        width="110"
      >
        <template slot-scope="scope">
          <span style="color: red;">{{ scope.row.reviewer }}</span>
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
        width="90"
      >
        <template slot-scope="{row}">
          <span v-if="row.pageviews" class="link-type" @click="handleFetchPv(row.pageviews)">{{ row.pageviews }}</span>
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
        prop="action"
        :label="$t('table.actions')"
        width="240"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            {{ $t('table.edit') }}
          </el-button>
          <el-button v-if="row.status != 'published'" type="success" size="mini" @click="handleModifyStatus(row, 'published', '发布成功！')">
            {{ $t('table.publish') }}
          </el-button>
          <el-button v-if="row.status != 'draft'" size="mini" @click="handleModifyStatus(row, 'draft', '保存为草稿成功！')">
            {{ $t('table.draft') }}
          </el-button>
          <el-button v-if="row.status != 'deleted'" type="danger" size="mini" @click="handleModifyStatus(row, 'deleted', '删除成功！')">
            {{ $t('table.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <Pagination v-show="total > 0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <!-- 每条数据的详情弹框 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :model="temp" :rules="rules" label-position="left" label-width="70px" style="width: 400px; margin-left: 50px;">
        <el-form-item :label="$t('table.type')" prop="type">
          <el-select v-model="temp.type" placeholder="Please select">
            <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('table.date')" prop="timestamp">
          <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="Please pick a date" />
        </el-form-item>
        <el-form-item :label="$t('table.title')" prop="title">
          <el-input v-model="temp.title" />
        </el-form-item>
        <el-form-item :label="$t('table.status')">
          <el-select v-model="temp.status" placeholder="Please select">
            <el-option v-for="item in statusOptions" :key="item.key" :label="item" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('table.importance')">
          <el-rate v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max="3" style="margin-top: 8px;" />
        </el-form-item>
        <el-form-item :label="$t('table.remark')">
          <el-input v-model="temp.remark" />
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

    <!-- 阅读量弹框 -->
    <el-dialog title="Reading statistics" :visible.sync="dialogPvVisible">
      <el-table :data="pvData" border fit highlight-current-row style="width: 100%">
        <el-table-column property="key" label="Channel" />
        <el-table-column property="pv" label="Pv" />
      </el-table>
    </el-dialog>

  </div>
</template>

<script>

import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article'
import waves from '@/directive/waves'
import { parseTime } from '@/utils'
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
  name: 'ComplexTable',
  directives: {
    waves
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      // console.log(statusMap[status])
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  components: {
    Pagination
  },
  data() {
    return {
      tableKey: 0,
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
      importanceOptions: [1, 2, 3],
      calendarTypeOptions,
      sortOptions: [
        {
          label: 'ID Ascending',
          key: '+id'
        },
        {
          label: 'ID Descending',
          key: '-id'
        }
      ],
      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
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
      },
      dialogPvVisible: false,
      pvData: [],
      downloadLoading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
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
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleModifyStatus(row, status, tips) {
      this.$message({
        message: tips,
        type: 'success'
      })
      row.status = status
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
    sortChange(data) {
      // console.log(data)
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }

      this.handleFilter()
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.temp.id = parseInt(Math.random() * 100) + 1024 // mock 一个 id
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
    handleUpdate(row) {
      this.temp = Object.assign({}, row)
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          tempData.timestamp = +new Date(tempData.timestamp)
          updateArticle(tempData).then(() => {
            for (const v of this.list) {
              if (v.id === this.temp.id) {
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
    },
    handleFetchPv(pv) {
      fetchPv(pv).then(response => {
        console.log(response.data)
        this.pvData = response.data.pvData
        this.dialogPvVisible = true
      })
    },
    handleDownload() {
      this.downloadLoading = true
          import('@/vendor/Export2Excel').then(excel => {
            // tHeader是表头，filterVal 中的数据是表格的字段
            const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
            // 上面设置Excel的表格第一行的标题
            const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
            // 上面的timestamp、title、type、importance、status是list里对象的属性
            const data = this.formatJson(filterVal, this.list)
            excel.export_json_to_excel({
              header: tHeader,
              data,
              filename: 'table-list'
            })
            this.downloadLoading = false
          })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
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
