<template>
  <div class="app-container documentation-container">
    <el-row>
      <el-col :span="8">
        <dropdown-menu :items="ProjectList" style="margin-left:50px;" title="技术清单" />
      </el-col>
      <el-col :span="8">
        <router-link to="/demo/index">
          <dropdown-menu style="margin-left:50px;" title="动画" />
        </router-link>
      </el-col>
      <el-col :span="8">
        <dropdown-menu style="margin-left:50px;" title="..." />
      </el-col>
    </el-row>

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
        { title: 'HTML5', href: 'https://www.cnblogs.com/myprogramer/', color: 'blue-btn' },
        { title: 'CSS3', href: 'https://www.cnblogs.com/myprogramer/', color: 'light-blue-btn' },
        { title: 'JavaScript', href: 'https://www.cnblogs.com/myprogramer/', color: 'pink-btn' },
        { title: 'NodeJS', href: 'https://www.cnblogs.com/myprogramer/', color: 'green-btn' },
        { title: 'Vue.js', href: 'https://www.cnblogs.com/myprogramer/', color: 'tiffany-btn' },
        { title: 'electron', href: 'https://www.cnblogs.com/myprogramer/', color: 'yellow-btn' },
        { title: '性能优化', href: 'https://www.cnblogs.com/myprogramer/', color: 'blue-btn' },
        { title: '数据结构与算法', href: 'https://www.cnblogs.com/myprogramer/', color: 'light-blue-btn' },
        { title: '设计模式', href: 'https://www.cnblogs.com/myprogramer/', color: 'pink-btn' }
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
