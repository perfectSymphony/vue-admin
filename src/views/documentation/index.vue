<template>
  <div class="app-container documentation-container">
    <a class="document-btn" target="_blank" href="https://github.com/perfectSymphony">{{ $t('documentation.documentation') }}</a>
    <a class="document-btn" target="_blank" href="https://github.com/perfectSymphony/vue-admin">{{ $t('documentation.github') }}</a>
    <a class="document-btn" target="_blank" href="https://panjiachen.gitee.io/vue-element-admin-site/zh/">博客园</a>
    <dropdown-menu :items="ProjectList" style="float:left;margin-left:50px;" title="技术栈" />
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
        { title: 'HTML5', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: 'CSS3', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: 'JavaScript', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: 'NodeJS', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: 'Vue.js', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: 'electron', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: '性能优化篇', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: '数据结构和算法篇', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: '设计模式篇', href: 'https://www.cnblogs.com/myprogramer/' }
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