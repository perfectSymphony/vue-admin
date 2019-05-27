<template>
 <el-table
    :data="list"
    style="width: 100%; padding-top: 15px;">
    <el-table-column label="Order_No" min-width="200">
		<template v-slot="{row}">
			<!-- {{ row.order_no }} -->
      <!-- {{ row.order_no | orderNoFilter}} -->
			{{ row.order_no | orderNoFilter}}
		</template>
    </el-table-column>
    <el-table-column align="center" label="Price" width="195">
		<template v-slot="{row}">
			￥{{ row.price }}
		</template>
    </el-table-column>
    <el-table-column align="center" label="Status" width="100">
      <template v-slot="scope">
        <el-tag :type = "scope.row.status | statusFilter">
            {{ scope.row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>	
</template>
<script>
import { transactionList } from '@/api/remote-search'

  export default {
  	name: 'transactionList',
  	filters: {
  		statusFilter(status){
  			const stateMap = {
  				success: 'success',
  				pending: 'danger'
  			}
  			return stateMap[status]
      },
      orderNoFilter(str){
        // return str.substring(0, 30)
        return str
      }
  	},
    data() {
      return {
        list: null
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        transactionList().then(response => {
          // 很厉害的代码
          this.list = response.data.items.slice(0, 8)
        })
      }
    }
  }	
</script>
<style lang="scss" scoped>
	
</style>