<template>
  <div class="app-container documentation-container">
    <dropdown-menu :items="ProjectList" style="margin-left:50px;" title="技术栈" />
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
        { title: '性能优化', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: '数据结构和算法', href: 'https://www.cnblogs.com/myprogramer/' },
        { title: '设计模式', href: 'https://www.cnblogs.com/myprogramer/' }
      ]
    }
  }
}

</script>
<style lang="scss" scoped>
.documentation-container {
	margin: 5px;
}
</style>
