<template>
    <div class="components-container">
        <aside>自己封装一个图片上传的插件</aside>
        <dropzone id="myVueDropzone" url="https://httpbin.org/post"  />
    </div>
</template>
<script>

import Dropzone from '@/components/Dropzone'

export default {
    name: 'DropzoneDemo',
    components: {
        Dropzone
    },
    data(){
        return {

        }
    }
}
</script>
<style lang="scss" scoped>

</style>

