import Vue from 'vue'

import SvgIcon from '@/components/SvgIcon'

// 注册全局组件

Vue.component('svg-icon', SvgIcon)

// https://cn.vuejs.org/v2/guide/components-registration.html
// 基础组件的自动化全局注册
// 用 require.context 只全局注册这些非常通用的基础组件
const req = require.context(
  // 其组件目录的相对路径
  './svg',
  // 是否匹配查询子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /\.svg$/
)

// map方法的作用不难理解，“映射”嘛，也就是原数组被“映射”成对应新数组
// https://www.zhihu.com/question/24927450
const requireAll = requireContext => requireContext.keys().map(requireContext)

requireAll(req)
