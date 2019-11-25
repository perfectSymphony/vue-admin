<template>
  <div class="app-container">
    <aside>
      目前仅支持单级表头导入，多级表头导入可能存在问题。
    </aside>
    <upload-excel-component :before-upload="beforeUpload" :on-success="handleSuccess" />
    <el-table :data="tableData" border highlight-current-row style="width: 100%; margin-top:40px;">
      <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
    </el-table>
  </div>
</template>

<script>

import UploadExcelComponent from '@/components/UploadExcel/index.vue'

export default {
  name: 'UploadExcel',
  components: {
    UploadExcelComponent
  },
  data() {
    return {
      tableData: [],
      tableHeader: []
    }
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1

      if (isLt1M) {
        return true
      }

      this.$message({
        message: '该上传文件不能大于1M.'
      })
    },
    handleSuccess({ results, header }) {
      this.tableData = results
      this.tableHeader = header
    }
  }

}
</script>
