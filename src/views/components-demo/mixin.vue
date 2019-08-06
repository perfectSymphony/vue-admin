<template>
    <div class="mixin-components-container">
        <el-row>
            <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>按钮</span>
            </div>
            <div style="margin-bottom: 50px;">
                <el-col :span="4" class="text-center">
                    <router-link class="liu-btn blue-btn" to="/documentation/index">
                    Documentation
                    </router-link>                    
                </el-col>
                <el-col :span="4" class="text-center"><div class="grid-content bg-purple">2</div></el-col>
                <el-col :span="4" class="text-center"><div class="grid-content bg-purple">3</div></el-col>
                <el-col :span="4" class="text-center"><div class="grid-content bg-purple">4</div></el-col>
            </div>
            </el-card>   
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'componentMixinDemo',
    data(){
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.mixin-components-container {
    background-color: #f0f2f5;
    padding: 30px;
    min-height: calc(100vh - 84px);
}

</style>
