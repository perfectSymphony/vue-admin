<template>
    <div class="components-container">
    <el-drag-select v-model="value" style="width:500px;" multiple placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-drag-select>

    <div style="margin-top:30px;">
      <el-tag v-for="item of value" :key="item" style="margin-right:15px;">
        {{ item }}
      </el-tag>
    </div>
    </div> 
</template>

<script>

// 基于 element-ui
import ElDragSelect from '@/components/DragSelect' 

export default {
    name: 'dragSelectDemo',
    components: {
        ElDragSelect
    },
    data(){
        return {
            options: [{
            value: '黄金糕',
            label: '黄金糕'
            }, {
            value: '双皮奶',
            label: '双皮奶'
            }, {
            value: '蚵仔煎',
            label: '蚵仔煎'
            }, {
            value: '龙须面',
            label: '龙须面'
            }, {
            value: '北京烤鸭',
            label: '北京烤鸭'
            }],
            value: ['黄金糕', '双皮奶', '蚵仔煎', '龙须面']
        }
    }
}
</script>

<style lang='scss' scoped>

</style>
