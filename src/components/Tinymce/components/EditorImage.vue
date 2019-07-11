<template>
    <div class="upload-container">
        <el-button type="primary" size="mini" icon="el-icon-upload"  @click="dialogVisible = true">
            upload
        </el-button>
        <el-dialog :visible.sync="dialogVisible">
            <el-upload
               action="https://httpbin.org/post"
               class="editor-slide-upload"
               list-type="picture-card"
            >
                <el-button size="small" type="primary">
                     Click upload
                </el-button>                
            </el-upload>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">
                    Cancel
                </el-button>
                <el-button type="primary" @click="dialogVisible = false">
                    Confirm
                </el-button>
            </span>
        </el-dialog>        
    </div>
</template>
<script>
export default {
    name: 'EditorImage',
    data(){
        return {
            dialogVisible: false
        }
    }
}
</script>
<style lang="scss" scoped>
.editor-slide-upload {
    margin-bottom: 20px;
    /deep/ .el-upload--picture-card {
        width: 100%;
    }
}
</style>
