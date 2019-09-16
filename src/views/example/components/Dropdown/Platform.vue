<template>
  <el-dropdown :hide-on-click="false" :show-timeout="100" trigger="click" style="margin-left: 10px;">
    <el-button type="plain">
      Platfroms({{ platforms.length }})
      <i class="el-icon-arrow-down el-icon--right" />
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-checkbox-group v-model="platforms" style="padding: 5px 15px;">
        <el-checkbox v-for="item in platformsOptions" :key="item.key" label="item.key">
          {{ item.name }}
        </el-checkbox>
      </el-checkbox-group>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    value: {
      required: true,
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      platformsOptions: [
        { key: 'a-platform', name: 'a-platform' },
        { key: 'b-platform', name: 'b-platform' },
        { key: 'c-platform', name: 'c-platform' }
      ]
    }
  },
  computed: {
    platforms: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
