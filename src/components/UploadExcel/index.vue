<template>
  <div>
      <input ref="excel-upload-input" type="file" accept=".xlsx, .xls" class="excel-upload-input" @change="handleClick">
      <div class="drop">
          Drop excel file here or
          <el-button :loading="loading" style="margin-left: 16px;" size="mini" type="primary" @click="handleUpload">
              Browse
          </el-button>
      </div>
  </div>
</template>

<script>

import XLSX from 'xlsx'

export default {
    props: {
        beforeUpload: Function,        // eslint-disable-line
        onSuccess: Function         // eslint-disable-line
    },
    data(){
        return {
            loading: false
        }
    },
    methods: {
        handleUpload(){
            this.$refs['excel-upload-input'].click()
        },
        handleClick(e){
            console.log(e)
            const files = e.target.files
            const rawFile = files[0]
            console.log(files)
            if(!rawFile) return
            this.upload(rawFile)
        },
        upload(rawFile){
            this.$refs['excel-upload-input'].value = null   //修复不能重复选择excel表格的bug

            if(!this.beforeUpload){
                this.readerData(rawFile)
                return
            }
            const before = this.beforeUpload(rawFile)

            if(before){
                this.readerData(rawFile)
            }
        },
        readerData(rawFile){
            this.loading = true
            return new Promise((resolve, reject) => {
                const reader = new FileReader()

                console.log(reader)
                // 处理load事件。该事件在读取操作完成时触发
                reader.onload = e => {
                    const data = e.target.result
                    const workbook = XLSX.read(data, {type: 'array'})
                }

            // FileReader 接口提供的 readAsArrayBuffer() 方法用于启动读取指定的 Blob 或 File 内容。
            // 当读取操作完成时，readyState 变成 DONE（已完成），并触发 loadend 事件，同时 result 属性中
            // 将包含一个 ArrayBuffer 对象以表示所读取文件的数据。

                reader.readAsArrayBuffer(rawFile)
            })
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