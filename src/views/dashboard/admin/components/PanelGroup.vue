<template>
	<el-row :gutter="40" class="panel-group">
	  <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
	  	<div class="card-panel">
	  		<div class="card-panel-icon-wrapper icon-people">
	  			<svg-icon icon-class="peoples" /> 
	  		</div>
	  		<div class="card-panel-description">
	  			<div class="card-panel-text">
	  				New Visits
	  			</div>
            <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
	  		</div>
	  	</div>
	  </el-col>
	  <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
	  	<div class="card-panel">
	  		<div class="card-panel-icon-wrapper icon-people">
	  			<svg-icon icon-class="message" /> 
	  		</div>
	  		<div class="card-panel-description">
	  			<div class="card-panel-text">
	  				Messages
	  			</div>
            <count-to :start-val="0" :end-val="81212" :duration="3000" class="card-panel-num" />
	  		</div>	  		
	  	</div>
	  </el-col>
	  <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
	  	<div class="card-panel">
	  		<div class="card-panel-icon-wrapper icon-people">
	  			<svg-icon icon-class="money" /> 
	  		</div>	
	  		<div class="card-panel-description">
	  			<div class="card-panel-text">
	  				Purchases
	  			</div>
          	<count-to :start-val="0" :end-val="9280" :duration="3200" class="card-panel-num" />
	  		</div>	  		
	  	</div>
	  </el-col>
	  <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
	  	<div class="card-panel">
	  		<div class="card-panel-icon-wrapper icon-people">
	  			<svg-icon icon-class="shopping" /> 
	  		</div>
	  		<div class="card-panel-description">
	  			<div class="card-panel-text">
	  				Shoppings
	  			</div>
          	<count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num" />
	  		</div>		  		
	  	</div>
	  </el-col>
	</el-row>
</template>
<script>
import CountTo from 'vue-count-to'

export default {
    name: 'PanelGroup',
    components: {
    	CountTo
    }
}
</script>
<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
