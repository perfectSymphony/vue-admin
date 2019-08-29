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

                    <div class="postInfo-container">
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label-width="60px" label="Author:" class="postInfo-container-item">
                                    <el-select v-model="postForm.author" multiple filterable remote reserve-keyword default-first-option
                                    placeholder="search user" :remote-method="getRemoteUserList" :loading="loading">
                                        <el-option v-for="(item, index) in userListOptions" :key="index" :label="item" :value="item">
                                        </el-option>
                                    </el-select>                                    
                                </el-form-item>
                            </el-col>
                            <el-col :span="10">
                                <el-form-item label-width="120px" label="Publush Time:" class="postInfo-container-item">
                                    <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>                                   
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label-width="90px" label="Importance:" class="postInfo-container-item">
                                    <el-rate v-model="value2" :colors="colors"></el-rate>                                    
                                </el-form-item>
                            </el-col>
                        </el-row>  
                    </div>
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
import { searchUser } from '@/api/remote-search'

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
            loading: false,
            userListOptions: [],
            options: [],
            value1: '',
            colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
            value2: null,
            list: [],
            states: ["Alabama", "Alaska", "Arizona",
            "Arkansas", "California", "Colorado",
            "Connecticut", "Delaware", "Florida",
            "Georgia", "Hawaii", "Idaho", "Illinois",
            "Indiana", "Iowa", "Kansas", "Kentucky",
            "Louisiana", "Maine", "Maryland",
            "Massachusetts", "Michigan", "Minnesota",
            "Mississippi", "Missouri", "Montana",
            "Nebraska", "Nevada", "New Hampshire",
            "New Jersey", "New Mexico", "New York",
            "North Carolina", "North Dakota", "Ohio",
            "Oklahoma", "Oregon", "Pennsylvania",
            "Rhode Island", "South Carolina",
            "South Dakota", "Tennessee", "Texas",
            "Utah", "Vermont", "Virginia",
            "Washington", "West Virginia", "Wisconsin",
            "Wyoming"]
        }
    },
    mounted() {
      this.list = this.states.map(item => {
        return { value: item, label: item };
      })
    },
    methods: {
      getRemoteUserList(query) {
          searchUser(query).then(response => {
              if(!response.data.items) return 
              this.userListOptions = response.data.items.map(v => v.name)
              console.log(this.userListOptions)
          })

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

        .postInfo-container {
            position: relative;
            @include clearfix;
            margin-bottom: 10px;

            .postInfo-container-item {
                float: left;
            }
        }
    }
}

</style>