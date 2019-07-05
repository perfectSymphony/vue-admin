<template>
    <div class="app-container">
        <el-tabs type="border-card">
        <el-tab-pane label="icons">
            <el-tooltip class="item" effect="dark" placement="top">
                <div slot="content">多行信息</div>
                <span>Top center</span>
            </el-tooltip>            
        </el-tab-pane>
        <el-tab-pane label="Element-UI Icons">Element-UI Icons</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import clipboard from '@/utils/clipboard'

export default {
    name: 'Icons'
}
</script>
<style scoped>

</style>

