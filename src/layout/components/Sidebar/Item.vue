<script>
// 函数式组件
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  // https://vuejs.org/v2/guide/render-function.html#Functional-Components
  // render: function (createElement, context) {}
  render(h, context) {
    // context中的props：提供所有prop的对象
    // children: VNode 子节点的数组
    const { icon, title } = context.props
    const VNode = []

    if (icon) {
      VNode.push(<svg-icon icon-class={icon} />)
    }

    if (title) {
      VNode.push(<span slot='title'>{(title)}</span>)
    }
    return VNode
  }
}
</script>
