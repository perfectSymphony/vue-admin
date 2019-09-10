<template>
  <div v-if="errorLogs.length>0">
    <el-badge is-dot class="item">
      <el-button style="padding: 8px 10px" type="danger" size="small">
        <svg-icon icon-class="bug" />
      </el-button>
    </el-badge>    
  </div>
</template>

<script>
export default {
    name: 'ErrorLog',
    computed: {
      errorLogs(){
        return this.$store.getters.errorLogs
      }
    }
}
</script>

<style>

</style>