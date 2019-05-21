<template>
    <div class="navbar">
        <hamburger id="hamburger-container" class="hamburger-container"   />
        <!-- 面包屑 -->
        <breadcrumb id="breadcrumb-container" class="breadcrumb-container"/>
    </div>     
</template>
<script>
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'


export default {
    name: 'Navbar',
    components: {
        Hamburger,
        Breadcrumb
    }
    
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

    .hamburger-container {
        height: 100%;
        line-height: 46px;
        float: left;
        cursor: pointer;
        transition: background .3s;
        // 这个属性只用于iOS (iPhone和iPad)。当你点击一个链接或者通过Javascript定义的可点击元素的时候，
        // 它就会出现一个半透明的灰色背景。要重设这个表现，你可以设置-webkit-tap-highlight-color为任何颜色。
        // 想要禁用这个高亮，设置颜色的alpha值为0即可。
        -webkit-tap-highlight-color:transparent; 
        &:hover {
            background: rgba(0, 0, 0, .025);
        } 
    }
}
</style>

