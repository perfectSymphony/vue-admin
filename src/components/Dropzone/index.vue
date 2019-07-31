<template>
    <div :id="id" :ref="id" :action="url" class="dropzone">
        <input type="file" name="file">
    </div>
</template>
<script>

import Dropzone from 'dropzone'
import 'dropzone/dist/dropzone.css'

// 禁止对所有元素的自动查找:
Dropzone.autoDiscover = false;

export default {
    name: 'Dropzone',
    props: {
        id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        clickable: {
            type: Boolean,
            default: true
        },
        defaultMsg: {
            type: String,
            default: '上传图片'
        },
        acceptedFiles: {
            type: String,
            default: ''
        },
        thumbnailHeight: {
            type: Number,
            default: 200
        },
        thumbnailWidth: {
            type: Number,
            default: 200
        },
        showRemoveLink: {
            type: Boolean,
            default: true
        },
        maxFilesize: {
            type: Number,
            default: 2
        },
        maxFiles: {
            type: Number,
            default: 3
        },
        autoProcessQueue: {
            type: Boolean,
            default: true
        },
        useCustomDropzoneOptions: {
            type: Boolean,
            default: false
        },
        defaultImg: {
            type: [String, Array],
            default: ''
        },
        couldPaste: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            dropzone: '',
            initOnce: true
        }
    },
    mounted(){
        const element =document.getElementById(this.id)
        const vm = this 
        this.dropzone = new Dropzone(element, {
            clickable: this.clickable,
            thumbnailWidth: this.thumbnailWidth,
            thumbnailHeight: this.thumbnailHeight,
            maxFiles: this.maxFiles,
            maxFilesize: this.maxFilesize,
            dictRemoveFile: 'Remove',
            addRemoveLinks: this.showRemoveLink,
            acceptedFiles: this.acceptedFiles,
            autoProcessQueue: this.autoProcessQueue,
            dictDefaultMessage: '<i style="margin-top: 3em;display: inline-block" class="material-icons">' + this.defaultMsg + '</i><br>Drop files here to upload',
            dictMaxFilesExceeded: '最多是三张图片',
            previewTemplate: '<div class="dz-preview dz-file-preview">  <div class="dz-image" style="width:' + this.thumbnailWidth + 'px;height:' + this.thumbnailHeight + 'px" ><img style="width:' + this.thumbnailWidth + 'px;height:' + this.thumbnailHeight + 'px" data-dz-thumbnail /></div>  <div class="dz-details"><div class="dz-size"><span data-dz-size></span></div> <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>  <div class="dz-error-message"><span data-dz-errormessage></span></div>  <div class="dz-success-mark"> <i class="material-icons">done</i> </div>  <div class="dz-error-mark"><i class="material-icons">error</i></div></div>',
            
            // 事件监听器只能在Dropzone的instances[实例] 上注册 , 添加你的事件监听器最好的地方是 在 init 方法中
            init(){},
            accept: (file, done) => {
                done()
            },
            // 在每个文件被发送前调用
            sending: (file, xhr, formData) => {
                vm.initOnce = false
            },
        })
        this.dropzone.on('success', file => {
            vm.$emit('dropzone-success', file, vm.dropzone.element)
        })
        this.dropzone.on('addedfile', file => {
            vm.$emit('dropzone-fileAdded', file)
        })
        this.dropzone.on('removedfile', file => {
            vm.$emit('dropzone-removedFile', file)
        })
        this.dropzone.on('error', (file, error, xhr) => {
            vm.$emit('dropzone-error', file, error, xhr)
        })
        this.dropzone.on('successmultiple', (file, error, xhr) => {
            vm.$emit('dropzone-successmultiple', file, error, xhr)
        })
    },
    destroyed(){
        this.dropzone.destroy()
    }
}
</script>
<style lang="scss" scoped>
    .dropzone {
        border: 2px solid #E5E5E5;
        font-family: 'Roboto', sans-serif;
        color: #777;
        transition: background-color .2s linear;
        padding: 5px; 
    }
    .dropzone:hover {
        background-color: #F6F6F6;
    }
    i {
        color: #ccc;
    }
    .dropzone .dz-image img {
        width: 100%;
        height: 100%;
    }
    .dropzone input[name='file'] {
        display: none;
    }
</style>

