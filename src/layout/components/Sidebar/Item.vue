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
  render(h, context) {
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
