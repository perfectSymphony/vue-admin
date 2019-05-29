<template>
  <div class="app-container documentation-container">
    <a class="document-btn" target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/">{{ $t('documentation.documentation') }}</a>
    <a class="document-btn" target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">{{ $t('documentation.github') }}</a>
    <a class="document-btn" target="_blank" href="https://panjiachen.gitee.io/vue-element-admin-site/zh/">国内文档</a>
    <dropdown-menu :items="ProjectList" style="float:left;margin-left:50px;" title="系列项目" />
  </div>
</template>
<script>
import DropdownMenu from '@/components/Share/DropdownMenu'

export default {
  name: 'Documentation',
  components: { DropdownMenu },
  data() {
    return {
      ProjectList: [
        { title: '项目1', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: '项目2', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: '项目3', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: '项目4', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: '项目5', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: '项目6', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: '项目7', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: '项目8', href: 'https://www.cnblogs.com/myprogramer/' }
      ]
    }
  }
}

</script>
<style lang="scss" scoped>
.documentation-container {
	margin: 50px;
  .document-btn {
	float: left;
	margin-left: 50px;
	display: block;
	cursor: pointer;
	background: black;
	color: #fff;
	height: 60px;
	width: 200px;
	line-height: 60px;
	text-align: center;
	foont-size: 20px;
  }

}
</style>