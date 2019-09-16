<template>
  <div class="tab-container">
    <el-tag>mounted times ：{{ createdTimes }}</el-tag>
    <el-alert :closable="false" style="width:200px;display:inline-block;vertical-align: middle;margin-left:30px;" title="Tab with keep-alive" type="success" />
    <el-tabs v-model="activeName" type="border-card" style="margin-top:20px;">
      <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
        <tab-pane v-if="activeName == item.key" :type="item.key" @create="showCreatedTimes" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

import tabPane from './components/TabPane'

export default {
  name: 'Tab',
  components: {
    tabPane
  },
  data() {
    return {
      tabMapOptions: [
        {
          label: 'China',
          key: 'CN'
        },
        {
          label: 'USA',
          key: 'US'
        },
        {
          label: 'Japan',
          key: 'JP'
        },
        {
          label: 'Eurozone',
          key: 'EU'
        }
      ],
      createdTimes: 0,
      activeName: 'CN'
    }
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    }
  }
}
</script>

<style lang='scss' scoped>
.tab-container {
    margin: 30px;
}
</style>
