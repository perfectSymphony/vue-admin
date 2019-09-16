<template>
  <div class="dashboard-editor-container">
    <div class=" clearfix">
      <liu-thumb :image="avatar" style="float: left;">
        Your roles:
        <span v-for="item in roles" :key="item" class="liu-info-roles">{{ item }}</span>
      </liu-thumb>
      <github-corner style="position: absolute; top: 0px; border: 0; right: 0;" />
      <div class="info-container">
        <span class="display_name">{{ name }}</span>
        <span style="font-size:20px;padding-top:20px;display:inline-block;">Editor's Dashboard</span>
      </div>
    </div>
    <div>
      <img :src="gif" class="emptyGif">
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import liuThumb from '@/components/liuThumb'
import GithubCorner from '@/components/GithubCorner'

export default {
  name: 'DashboardEditor',
  components: {
    liuThumb,
    GithubCorner
  },
  data() {
    return {
      gif: 'https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3'
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  }
}
</script>

<style lang='scss' scoped>
  .dashboard-editor-container {
      background-color: #e3e3e3;
      min-height: 100vh;
      padding: 50px 60px 0;

      .liu-info-roles {
          font-size: 12px;
          font-weight: 700;
          color: #333;
          display: block;
      }
      .info-container {
      position: relative;
      margin-left: 190px;
      height: 150px;
      line-height: 200px;
      .display_name {
          font-size: 48px;
          line-height: 48px;
          color: #212121;
          position: absolute;
          top: 25px;
      }
      }
  }

  .emptyGif {
      display: block;
      width: 45%;
      margin: 0 auto;
  }
</style>
