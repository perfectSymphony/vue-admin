// 参考： https://blog.csdn.net/qq_31001889/article/details/81205632

// ESLint采用逐级向上查找的方式查找.eslintrc.文件，当找到带有”root”: true配置项的.eslintrc.*文件时，将会停止向上查找。

/* eslint-disable */
require('script-loader!file-saver');
import JSZip from 'jszip'

export function export_txt_to_zip(th, jsonData, txtName, zipName) {
  const zip = new JSZip()
  const txt_name = txtName || 'file'
  const zip_name = zipName || 'file'
  const data = jsonData
  let txtData = `${th}\r\n`
  data.forEach((row) => {
    let tempStr = ''
    tempStr = row.toString()
    txtData += `${tempStr}\r\n`
  })
  zip.file(`${txt_name}.txt`, txtData)
  zip.generateAsync({
    type: "blob"
  }).then((blob) => {
    saveAs(blob, `${zip_name}.zip`)
  }, (err) => {
    alert('导出失败')
  })
}


