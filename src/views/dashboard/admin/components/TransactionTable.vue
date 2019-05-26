<template>
 <el-table
    :data="list"
    style="width: 100%; padding-top: 15px;">
    <el-table-column label="Order_No" min-width="200">
		<template v-slot="scope">
			
		</template>
    </el-table-column>
    <el-table-column align="center" label="Price" width="195">
		<template v-slot="scope">
			
		</template>
    </el-table-column>
    <el-table-column align="center" label="Status" width="100"
      :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template v-slot="scope">
        <el-tag
          :type="scope.row.tag === '家' ? 'primary' : 'success'"
          close-transition>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>
  </el-table>	
</template>
<script>
import { transactionList }	from '@/api/romte-search'

  export default {
  	name: 'transactionList',
  	filters: {
  		statusFilter(status){
  			const stateMap = {
  				success: 'success',
  				pending: 'danger'
  			}
  			return stateMap[status]
  		}
  	},
    data() {
      return {
        list: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      }
    }
  }	
</script>
<style lang="scss" scoped>
	
</style>