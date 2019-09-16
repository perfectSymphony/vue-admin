<template>
  <div class="app-container">
    <div class="filter-container">
      <el-checkbox-group v-model="formThead">
        <el-checkbox v-for="fruit in fruits" :key="fruit" :label="fruit">
          {{ fruit }}
        </el-checkbox>
      </el-checkbox-group>
    </div>

    <el-table :data="tableData" border fit highlight-current-row style="width: 100%">
      <el-table-column prop="name" label="fruitName" width="180" />
      <el-table-column v-for="fruit in formThead" :key="fruit" :label="fruit">
        <template slot-scope="scope">
          {{ scope.row[fruit] }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

const fruitOptions = ['apple', 'banana', 'orange', 'tomato']
const defaultFormThead = ['apple', 'banana']

export default {
  data() {
    return {
      tableData: [
        {
          name: 'fruit-1',
          apple: 'apple-10',
          banana: 'banana-10',
          orange: 'orange-10',
          tomato: 'tomato-10'
        },
        {
          name: 'fruit-2',
          apple: 'apple-20',
          banana: 'banana-20',
          orange: 'orange-20',
          tomato: 'tomato-20'
        }
      ],
      fruits: fruitOptions,
      formThead: defaultFormThead // 默认表头 Default header
    }
  }
}
</script>

<style scoped>

</style>
