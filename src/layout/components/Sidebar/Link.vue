<template>
  <!-- 渲染一个“元组件”为动态组件。依 is 的值，来决定哪个组件被渲染。 -->
  <!-- eslint-disable vue/require-component-is -->
  <component v-bind="linkProps(to)">
    <slot />
  </component>
</template>
<script>
import { isExternal } from '@/utils/validate'

export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    linkProps(url) {
      if (isExternal(url)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          // rel=noopener 可以防止 Chrome 49+，Opera 36+下新打开的页面地址操作原页面的内容
          rel: 'noopener'
        }
      }
      return {
        is: 'router-link',
        to: url
      }
    }
  }
}
</script>

