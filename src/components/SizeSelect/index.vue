<template>
    <el-dropdown @command="handleSetSize" trigger="click">
    <div>
        <svg-icon icon-class="size" />
    </div>
    <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="item of sizeOptions" :key="item.value" :disabled="size === item.value" :command="item.value">
            {{item.value}}
        </el-dropdown-item>
    </el-dropdown-menu>
    </el-dropdown>
</template>
<script>
  export default {
      data(){
          return {
              sizeOptions: [
                  { label: 'Default', value: 'default' },
                  { label: 'Medium', value: 'medium' },
                  { label: 'Small', value: 'small' },
                  { label: 'Mini', value: 'mini' }
              ]
          }
      },
      computed: {
          size(){
              return this.$store.getters.size
          }
      },
     methods: {
         handleSetSize(size){
             this.$ELEMENT.size = size
             this.$store.dispatch('app/setSize', size)
             this.refreshView()
             this.$message({
                 message: 'Switch Size Success',
                 type: 'success'
             })
         },
         refreshView(){
            //  为了清除页面缓存而重新渲染
            // this.$store.dispatch('tagsView/delAllCachedViews', this.$route)
            console.log(1111111111)
            console.log(this.$route)
            console.log(22222222222222)
            const { fullPath } = this.$route

            this.$nextTick(() => {
                this.$router.replace({
                    path: '/redirect' + fullPath
                })
            })
         }
     }
  }
</script>
<style scoped>

</style>


