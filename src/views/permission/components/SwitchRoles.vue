<template>
    <div>
        <div style="margin-bottom: 15px;">
            {{ $t('permission.roles') }}: {{ roles }}
        </div>
            {{ $t('permission.switchRoles') }}: 
    <el-radio-group v-model="switchRoles">
      <el-radio-button label="admin"></el-radio-button>
      <el-radio-button label="editor"></el-radio-button>
    </el-radio-group>        
    </div>
</template>
<script>
// https://cn.vuejs.org/v2/api/#computed
// https://vuejs.org/v2/guide/components.html#Listening-to-Child-Components-Events

export default {
    name: 'SwitchRoles',
    computed: {
        roles() {
            return this.$store.getters.roles
        },
        switchRoles: {
            get(){
                return this.roles[0]
            },
            set(val){
                this.$store.dispatch('user/changeRoles', val).then(() => {
                    this.$emit('change')
                })
            }
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

