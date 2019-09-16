<template>
  <el-dropdown :show-timeout="100" trigger="click">
    <el-button type="plain">
      {{ !comment_disabled ? 'Comment: opened' : 'Comment: closed' }}
      <i class="el-icon-arrow-down el-icon--right" />
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>
        <el-radio-group v-model="comment_disabled">
          <el-radio :label="true">
            Close comment
          </el-radio>
          <el-radio :label="false">
            Open comment
          </el-radio>
        </el-radio-group>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    comment_disabled: {
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
