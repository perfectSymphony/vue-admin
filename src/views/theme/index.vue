<template>
  <div class="app-container">
    <!-- <el-switch v-model="theme" />     -->
    <div class="block">
      <el-color-picker v-model="theme" />
    </div>

    <div class="block">
      <el-button type="primary">
        Primary
      </el-button>
      <el-button type="success">
        Success
      </el-button>
      <el-button type="info">
        Info
      </el-button>
      <el-button type="warning">
        Warning
      </el-button>
      <el-button type="danger">
        Danger
      </el-button>
    </div>

    <div class="block">
      <el-button type="primary" icon="el-icon-edit" />
      <el-button type="primary" icon="el-icon-share" />
      <el-button type="primary" icon="el-icon-delete" />
      <el-button type="primary" icon="el-icon-search">
        Search
      </el-button>
      <el-button type="primary">
        Upload
        <i class="el-icon-upload el-icon-right" />
      </el-button>
    </div>

    <div class="block">
      <el-tag v-for="tag in tags" :key="tag.type" :type="tag.type" class="tag-item">
        {{ tag.name }}
      </el-tag>
    </div>

    <div class="block">
      <el-radio-group v-model="radio">
        <el-radio :label="3">
          Option A
        </el-radio>
        <el-radio :label="6">
          Option B
        </el-radio>
        <el-radio :label="9">
          Option C
        </el-radio>
      </el-radio-group>
    </div>

    <div class="block">
      <el-slider v-model="slideValue" />
    </div>

  </div>
</template>

<script>

import { toggleClass } from '@/utils'
// import '@/assets/custom-theme/index.css'

export default {
  name: 'Theme',
  data() {
    return {
      tags: [
        { name: 'Tag One', type: '' },
        { name: 'Tag Two', type: 'info' },
        { name: 'Tag Three', type: 'success' },
        { name: 'Tag Four', type: 'warning' },
        { name: 'Tag Five', type: 'danger' }
      ],
      radio: 3,
      slideValue: 50,
      theme: '#ff8282'
    }
  },
  watch: {
    theme() {
      toggleClass(document.body, 'custom-theme')
    }
  }
}
</script>

<style scoped>

    .box-card {
        width: 400px;
        max-width: 100%;
        margin: 20px auto;
    }

    .field-label {
        vertical-align: middle;
    }

    .block {
        padding: 30px 24px;
    }

    .tag-item {
    margin-right: 15px;
    }

</style>
