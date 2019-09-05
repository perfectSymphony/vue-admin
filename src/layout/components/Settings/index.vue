<template>
  <div class="drawer-container">
    <div>
      <h3 class="drawer-title">{{ $t('settings.title') }}</h3>

      <div class="drawer-item">
        <span>{{ $t('settings.theme') }}</span>
        <theme-picker style="float: right;height: 26px;margin: -3px 8px 0 0;" />
      </div>

      <div class="drawer-item">
        <span>{{ $t('settings.tagsView') }}</span>
        <el-switch v-model="tagsView" class="drawer-switch" />
      </div>
    </div>
  </div>
</template>

<script>

import ThemePicker from '@/components/ThemePicker'

export default {
    name: 'Setting',
    components: {
      ThemePicker
    },
    data(){
      return {
        tagsView: false
      }
    }
}
</script>

<style lang="scss" scoped>

// 比如父元素设置属性：font- size:14px;line-height:1.5,child设置font-size:26px;

// 那么父元素：line-height = 14px * 1.5 = 21px，子元素：line-height = 26px * 1.5 = 39px。

// 父元素设置属性：font-size:14px;line-height:150%,child设置font-size:26px;

// 那么父元素：line-height = 14px * 150% = 21px，子元素：line-height = 父元素的line-height = 21px。

.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
  
  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    padding: 12px 0;
  }

  .drawer-switch {
    float: right;
  }
}
</style>