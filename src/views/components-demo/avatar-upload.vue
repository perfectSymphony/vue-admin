<template>
    <div class="components-container">
        <liu-thumb :image="image" />
        <el-button type="primary" icon="upload" style="position: absolute;bottom: 15px;margin-left: 40px;" @click="imagecropperShow=true">
        Change Avatar
        </el-button>
        <image-cropper
        v-show="imagecropperShow"
        >

        </image-cropper>
    </div>
</template>
<script>
import ImageCropper from '@/components/ImageCropper'
import liuThumb from '@/components/liuThumb'

export default {
    name: 'avatar-upload',
    components: {
        ImageCropper,
        liuThumb
    },
    data(){
        return {
            imagecropperShow: false,
            image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

