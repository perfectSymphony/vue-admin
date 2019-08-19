<template>
    <div class="app-container">
        <div class="filter-container">
            <el-checkbox-group v-model="checkedCities">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </div>

        <el-table :key="key" :data="tableData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="name" label="城市名称" width="180" />
        <el-table-column v-for="city in formThead" :key="city" :label="city">
            <template slot-scope="scope">
            {{ scope.row[city] }}
            </template>
        </el-table-column>
        </el-table>
    </div>
</template>

<script>

  const cityOptions = ['上海', '北京', '广州', '深圳']

  const checkedCities = ['上海', '北京']

  export default {
    data() {
      return {
        tableData: [
            {
            name: '城市名称-1',
            SH: '上海-10',
            BJ: '北京-10',
            GZ: '广州-10'
            },
            {
            name: '城市名称-2',
            SH: '上海-20',
            BJ: '北京-20',
            GZ: '广州-20'
            }
        ],
        key: 1,
        checkAll: false,
        checkedCities: checkedCities,
        formThead: checkedCities,
        cities: cityOptions,
      }
    },
    watch: {
        checkedCities(valArr){
            console.log(valArr)
        }
    }
  }
</script>

<style>

</style>