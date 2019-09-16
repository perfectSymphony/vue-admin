<template>
  <div class="app-container">
    <div class="filter-container">
      <el-checkbox-group v-model="checkboxVal">
        <el-checkbox v-for="fruit in fruits" :key="fruit" :label="fruit">
          {{ fruit }}
        </el-checkbox>
      </el-checkbox-group>
    </div>

    <el-table :key="key" :data="tableData" border fit highlight-current-row style="width: 100%">
      <el-table-column prop="水果" label="fruitName" width="180" />
      <el-table-column v-for="fruit in formThead" :key="fruit" :label="fruit">
        <template slot-scope="scope">
          {{ scope.row[fruit] }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

const fruitOptions = ['苹果', '香蕉', '橘子', '番茄']
const defaultFormThead = ['苹果', '香蕉']

export default {
  data() {
    return {
      tableData: [
        {
          水果: '水果',
          苹果: '苹果',
          香蕉: '香蕉',
          橘子: '橘子',
          番茄: '番茄'
        },
        {
          水果: '水果',
          苹果: '苹果',
          香蕉: '香蕉',
          橘子: '橘子',
          番茄: '番茄'
        }
      ],
      key: 1, // table key
      fruits: fruitOptions,
      checkboxVal: defaultFormThead, // checkboxVal
      formThead: defaultFormThead // 默认表头 Default header
    }
  },
  watch: {
    checkboxVal(valArr) {
      this.formThead = valArr
      this.key = this.key + 1// 为了保证table 每次都会重渲
    }
  }
}
</script>

