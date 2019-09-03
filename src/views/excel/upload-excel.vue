<template>
  <div class="app-container">
      <upload-excel-component :before-upload="beforeUpload" :on-success="handleSuccess"></upload-excel-component>
      <el-table :data="tableData" border highlight-current-row style="width: 100%; margin-top:40px;">
          <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item"></el-table-column>
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
    data(){
        return {
            tableData: [],
            tableHeader: []
        }
    },
    methods: {
        beforeUpload(file){
            const isLt1M = file.size / 1024 /1024 < 1

            if(isLt1M){
                return true
            }

            this.$message({
                message: '该上传文件不能大于1M.'
            })
        },
        handleSuccess({ results, header }){
            this.tableData = results
            this.tableHeader = header
        }
    }

}
</script>
