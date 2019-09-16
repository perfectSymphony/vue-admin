<template>
  <div class="icons-container">
    <el-tabs type="border-card">
      <el-tab-pane label="icons">
        <div v-for="item of svgIcons" :key="item" @click="handleClipboard(generateIconCode(item), $event)">
          <el-tooltip class="item" effect="dark" placement="top">
            <div slot="content">
              {{ generateIconCode(item) }}
            </div>
            <div class="icon-item">
              <svg-icon :icon-class="item" class-name="disabled" />
              <span>{{ item }}</span>
            </div>
          </el-tooltip>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Element-UI Icons">
        <div v-for="item of elementIcons" :key="item" @click="handleClipboard(generateElementIconCode(item), $event)">
          <el-tooltip class="item" effect="dark" placement="top">
            <div slot="content">
              {{ generateElementIconCode(item) }}
            </div>
            <div class="icon-item">
              <i :class="'el-icon-' + item" />
              <span>{{ item }}</span>
            </div>
          </el-tooltip>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import clipboard from '@/utils/clipboard'
import svgIcons from './svg-icons'
import elementIcons from './element-icons'

export default {
  name: 'Icons',
  data() {
    return {
      svgIcons,
      elementIcons
    }
  },
  methods: {
    generateIconCode(symbol) {
      return `<svg-icon icon-class="${symbol}" />`
    },
    generateElementIconCode(symbol) {
      return `<i class="el-icon-${symbol}" />`
    },
    handleClipboard(text, e) {
      clipboard(text, e)
    }
  }
}
</script>
<style lang="scss" scoped>
.icons-container {
    margin: 10px 20px 0;
    overflow: hidden;

    .icon-item {
        width: 100px;
        height: 85px;
        margin: 20px;
        text-align: center;
        float: left;
        font-size: 30px;
        color: #24292e;
        cursor: pointer;
    }

    span {
        display: block;
        font-size: 16px;
        margin-top: 10px;
    }
    // https://blog.csdn.net/qq_42606051/article/details/81808133
    .disabled {
        pointer-events: none;
    }
}
</style>

