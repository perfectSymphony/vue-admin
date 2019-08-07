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
                <el-col :span="4" class="text-center">
                    <router-link class="liu-btn light-blue-btn" to="/icon/index">
                        icons
                    </router-link>
                </el-col>
                <el-col :span="4" class="text-center">
                    <router-link class="liu-btn pink-btn" to="/components/mixin">
                        Excel
                    </router-link>
                </el-col>
                <el-col :span="4" class="text-center">
                    <router-link class="liu-btn green-btn" to="/components/mixin">
                        Table
                    </router-link>
                </el-col>
                <el-col :span="4" class="text-center">
                    <router-link class="liu-btn tiffany-btn" to="/components/mixin">
                        Form
                    </router-link>
                </el-col>
                <el-col :span="4" class="text-center">
                    <router-link class="liu-btn yellow-btn" to="/components/mixin">
                        Theme
                    </router-link>
                </el-col>
            </div>
            </el-card>   
        </el-row>
        
        <el-row :gutter="20" style="margin-top: 50px;">
            <el-col :span="6">
                <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>Material Design 的input</span>
                </div>
                <div style="height: 100px;">
                    <el-form :model="demo" :rules="demoRules">
                    <el-form-item prop="title">
                        <md-input v-model="demo.title" icon="search" name="title" placeholder="请输入事项名称">
                            事项名称
                        </md-input>
                    </el-form-item>
                    </el-form>                    
                </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>图片hover效果</span>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>水波纹 waves v-directive</span>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>hover text</span>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>

import MdInput from '@/components/MDinput'

export default {
    name: 'componentMixinDemo',
    components: {
        MdInput
    },
    data(){
        const validate = (rule, value, callback) => {
            if(value.length !== 6){
                callback(new Error('请输入六个字符'))
            } else {
                callback()
            }
        }
        return {
            demo: {
                title: ''
            },
            demoRules: {
                title: [{
                    required: true,
                    trigger: 'change',
                    validator: validate
                }]
            }
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
