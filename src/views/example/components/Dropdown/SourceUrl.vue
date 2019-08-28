<template>
    <el-dropdown :show-timeout="100" trigger="click" style="margin-left: 10px;">
        <el-button type="plain">
            Link
            <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown" class="no-padding no-border" style="width: 400px;">
            <el-form-item label-width="0px" style="margin-bottom: 0px;" prop="source_uri">
                <el-input v-model="source_uri" placeholder="https://github.com/perfectSymphony/vue-admin">
                    <template slot="prepend">
                        http://
                    </template>                        
                </el-input>
            </el-form-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
  export default {
    name: 'Dropdown',
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    computed: {
        source_uri: {
            get(){
                return this.value
            },
            set(val){
                this.$emit('input', val)
            }
        }
    }
  }
</script>
