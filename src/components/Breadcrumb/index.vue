<template>
    <el-breadcrumb class="app-breadcrumb" separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
            <span v-if="item.redirect === 'noredirect' || index == levelList.length - 1" class="no-redirect">
                {{ generateTitle(item.meta.title) }}
            </span>
            <a v-else @click.prevent = "handleLink(item)">{{ generateTitle(item.meta.title) }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb> 
</template>
<script>
import { generateTitle } from '@/utils/i18n'

// 处理 url 中地址与参数，能够很方便得到我们想要的数据
// path-to-regexp 可以看成是 url 字符串的正则表达式
import pathToRegexp from 'path-to-regexp'

export default {
    name: 'Breadcrumb',
    data(){
        return {
            levelList: null
        }
    },
    watch: {
        $route(){
            this.getBreadcrumb()
        }
    },
    created(){
        this.getBreadcrumb()
    },
    methods: {
        generateTitle,
        getBreadcrumb(){
            //  only show routes with meta.title
            let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
            const first =matched[0]

            if(!this.isDashboard(first)){
                matched = [{ path: '/dashboard', meta: { title: 'dashboard' }}].concat(matched)
            }

            this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
        },
        isDashboard(route){
            const name = route && route.name
            if(!name){
                return false
            }
            return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()   
        },
        pathCompile(path){
            const { params } = this.$route
            var toPath = pathToRegexp.compile(path)
            return toPath(params)
        },
        handleLink(item){
            const { redirect, path } = item
            if(redirect){
                this.$router.push(redirect)
                return 
            }
            this.$router.push(this.pathCompile(path))
        },
    }
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 8px;

    .no-redirect{
        color: #97a8be;
        cursor: text;  //此光标指示文本
    }
}

</style>

