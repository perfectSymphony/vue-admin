<template>
    <div class="app-container">
        <switch-roles @change="handleRolesChange" />
    </div>
</template>
<script>
import SwitchRoles from './components/SwitchRoles'

export default {
    name: 'DirectivePermission',
    components: {
        SwitchRoles
    },
    data(){
        return {
            key: 1   // 为了能每次切换权限的时候重新初始化指令
        }
    },
    methods: {
        handleRolesChange(){
            this.key++
        }
    }
}
</script>
<style lang="scss" scoped>
.app-container {
    
}
</style>


