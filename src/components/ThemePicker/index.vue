<template>
    <el-color-picker v-model="color" 
       popper-class="theme-picker-dropdown"
       :predefine = 'predefineColors'
       class="theme-picker"
    />
</template>

<script>

const version = require('element-ui/package.json').version  //从node_modules中获取element-ui的版本号
const ORIGINAL_THEME = '#409EFF'  //默认颜色

export default {
    name: 'ThemePicker',
    data(){
        return {
            color: '',
            predefineColors: [
                '#409EFF', 
                '#1890ff', 
                '#304156',
                '#212121',
                '#11a983', 
                '#13c2c2', 
                '#6959CD', 
                '#f5222d'
            ]
        }
    }
}
</script>

<style>
.theme-message,
.theme-picker-dropdown {
    z-index: 99999 !important;
}

</style>