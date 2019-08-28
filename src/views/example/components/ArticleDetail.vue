<template>
  <div class="createPost-container">
      <el-form ref="postForm" :model="postForm" class="form-container">   
        <Sticky :z-index = '10' class-name="sub-navbar">
            <CommentDropdown v-model="postForm.comment_disabled" />
            <PlatformDropdown v-model="postForm.platforms" />
            <SourceUrlDropdown v-model="postForm.source_uri" />
            <el-button type="success" v-loading="loading" style="margin-left: 10px;">
                Publish
            </el-button>
            <el-button type="warning" v-loading="loading">
                Draft
            </el-button>
        </Sticky>

        <div class="createPost-main-container">
            <el-row>
                <Warning />

                <el-col :span="24">
                    <el-form-item style="margin-bottom: 40px;" prop="title">
                        <MDinput v-model="postForm.title" :maxlength="100" name="name" required>
                            Title
                        </MDinput>
                    </el-form-item>
                </el-col>
            </el-row>
        </div>
      </el-form>
  </div>
</template>

<script>

import Sticky from '@/components/Sticky'
import { CommentDropdown, PlatformDropdown, SourceUrlDropdown } from './Dropdown'
import Warning from './Warning'
import MDinput from '@/components/MDinput'

const defaultForm = {

}

export default {
    name: 'ArticleDetail',
    components: {
        Sticky,
        CommentDropdown,
        PlatformDropdown,
        SourceUrlDropdown,
        Warning,
        MDinput
    },
    data(){
        return {
            postForm: Object.assign({}, defaultForm),
            loading: false
        }
    }
}
</script>

<style lang="scss" scoped>

@import '~@/styles/mixin.scss';

.createPost-container {
    position: relative;

    .createPost-main-container {
        padding: 40px 45px 20px 50px;
    }
}

</style>