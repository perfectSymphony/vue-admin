<template>
  <div>
    <input ref="excel-upload-input" type="file" accept=".xlsx, .xls" class="excel-upload-input" @change="handleClick">
    <div class="drop" @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover">
      Drop excel file here or
      <el-button :loading="loading" style="margin-left: 16px;" size="mini" type="primary" @click="handleUpload">
        Browse
      </el-button>
    </div>
  </div>
</template>

<script>

//  参考： http://www.uedsc.com/js-xlsx-api.html
import XLSX from 'xlsx'

export default {
  props: {
        beforeUpload: Function,        // eslint-disable-line
        onSuccess: Function         // eslint-disable-line
  },
  data() {
    return {
      loading: false,
      excelData: {
        header: null,
        results: null
      }
    }
  },
  methods: {
    generateData({ header, results }) {
      this.excelData.header = header
      this.excelData.results = results
      this.onSuccess && this.onSuccess(this.excelData)
    },
    handleDrop(e) {
      e.stopPropagation()
      e.preventDefault()
      if (this.loading) return
      const files = e.dataTransfer.files
      if (files.length !== 1) {
        this.$message.error('仅支持上传一个文件')
        return
      }
      const rawFile = files[0]

      if (!this.isExcel(rawFile)) {
        this.$message.error('仅支持上传.xlsx, .xls, .csv格式的文件')
        return false
      }

      this.upload(rawFile)
      e.stopPropagation()
      e.preventDefault()
    },
    handleDragover(e) {
      e.stopPropagation()
      e.preventDefault()
      e.dataTransfer.dropEffect = 'copy'
    },
    handleUpload() {
      this.$refs['excel-upload-input'].click()
    },
    handleClick(e) {
      // console.log(e)
      const files = e.target.files
      const rawFile = files[0]
      // console.log(files)
      if (!rawFile) return
      this.upload(rawFile)
    },
    upload(rawFile) {
      this.$refs['excel-upload-input'].value = null // 修复不能重复选择excel表格的bug

      if (!this.beforeUpload) {
        this.readerData(rawFile)
        return
      }
      const before = this.beforeUpload(rawFile)

      if (before) {
        this.readerData(rawFile)
      }
    },
    readerData(rawFile) {
      this.loading = true
      return new Promise((resolve, reject) => {
        const reader = new FileReader()

        // console.log(reader)
        // 处理load事件。该事件在读取操作完成时触发
        reader.onload = e => {
          const data = e.target.result
          // 使用 ‘数组’ 类型读取文件
          const workbook = XLSX.read(data, { type: 'array' })
          const firstSheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[firstSheetName]
          const header = this.getHeaderRow(worksheet)
          const results = XLSX.utils.sheet_to_json(worksheet)
          this.generateData({ header, results })
          this.loading = false
          resolve()
        }

        // FileReader 接口提供的 readAsArrayBuffer() 方法用于启动读取指定的 Blob 或 File 内容。
        // 当读取操作完成时，readyState 变成 DONE（已完成），并触发 loadend 事件，同时 result 属性中
        // 将包含一个 ArrayBuffer 对象以表示所读取文件的数据。

        reader.readAsArrayBuffer(rawFile)
      })
    },
    getHeaderRow(sheet) {
      const headers = []
      const range = XLSX.utils.decode_range(sheet['!ref'])

      let C
      const R = range.s.r
      // 从第一行开始
      for (C = range.s.c; C <= range.e.c; ++C) {
        // 在范围之内，遍历每一列
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
        // 在第一行找到对应的单元格
        // header缩写
        // 设置默认值
        let hdr = 'UNKNOW' + C
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)

        headers.push(hdr)
      }
      return headers
    },
    isExcel(file) {
      return /\.(xlsx|xls|csv)$/.test(file.name)
    }
  }
}
</script>

<style lang="scss" scoped>

.excel-upload-input {
    display: none;
    z-index: 999;
}

.drop {
    border: 2px dashed #bbb;
    width: 600px;
    height: 160px;
    line-height: 160px;
    margin: 0 auto;
    font-size: 24px;
    border-radius: 5px;
    text-align: center;
    color: #bbb;
    position: relative;
}
</style>
