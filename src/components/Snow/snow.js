class Snow {
  constructor(opt = {}) {
    // 元素
    this.el = null
    // 直径
    this.width = 0
    // 最大直径
    this.maxWidth = opt.maxWidth || 80
    // 最小直径
    this.minWidth = opt.minWidth || 2
    // 透明度
    this.opacity = 0
    // 水平速度
    this.sx = 0
    // 垂直速度
    this.sy = 0
    // z轴数值
    this.z = 0
    // 重置位置
    this.y = 0
    // 是否左右摇摆
    this.isSwing = false
    // 左右摇摆的步长
    this.stepSx = 0.03
    // 速度
    this.speed = 0
    // 最大速度
    this.maxSpeed = opt.maxSpeed || 4
    // 最小速度
    this.minSpeed = opt.minSpeed || 1
    // 快速划过的最大速度
    this.quickMaxSpeed = opt.quickMaxSpeed || 10
    // 快速划过的最小速度
    this.quickMinSpeed = opt.quickMinSpeed || 8
    // 快速划过的宽度
    this.quickWidth = opt.quickWidth || 80
    // 快速划过的透明度
    this.quickOpacity = opt.quickOpacity || 0.2
    // 浏览器窗口尺寸
    this.windowWidth = window.innerWidth
    this.windowHeight = window.innerHeight

    this.init()
  }

  // 初始化各种属性
  init(reset) {
    const isQuick = Math.random() > 0.8
    this.isSwing = Math.random() > 0.8
    this.width = isQuick ? this.quickWidth : Math.floor(Math.random() * this.maxWidth + this.minWidth)
    this.z = isQuick ? Math.random() * 300 + 200 : 0
    this.opacity = isQuick ? this.quickOpacity : Math.random()
    this.x = Math.floor(Math.random() * (this.windowWidth - this.width))
    this.y = Math.floor(Math.random() * (this.windowHeight - this.width))
    if (reset && Math.random() > 0.8) { // 让一小部分的雪初始化在左侧
      this.x = -this.width
    } else if (reset) {
      this.y = -this.width
    }
    this.sy = isQuick ? Math.random() * this.quickMaxSpeed + this.quickMinSpeed : Math.random() * this.maxSpeed + this.minSpeed
    this.sx = this.sy * Math.random()
  }

  // 设置样式
  setStyle() {
    this.el.style.cssText = `
      position: fixed;
      left: 0;
      top: 0;
      display: block;
      width: ${this.width}px;
      height: ${this.width}px;
      opacity: ${this.opacity};
      background-image: radial-gradient(#fff 0%, rgba(255, 255, 255, 0) 60%);
      border-radius: 50%;
      z-index: 9999999999999;
      pointer-events: none;
      transform: translate(${this.x}px, ${this.y}px);
    `
  }

  // 渲染
  render() {
    this.el = document.createElement('div')
    this.setStyle()
    document.body.appendChild(this.el)
  }

  // 运动
  move() {
    this.x += this.sx
    this.y += this.sy
    // 完全离开窗口就调一下初始化方法，另外还需要修改一下init方法，因为重新出现我们是希望它的y坐标为0或者小于0，这样就不会又凭空出现的感觉，而是从天上下来的
    if (this.x < -this.width || this.x > this.windowWidth || this.y > this.windowHeight) {
      this.init(true)
      this.setStyle()
    }
    if (this.isSwing) {
      if (this.sx >= 1 || this.sx <= -1) {
        this.stepSx = -this.stepSx
      }
      this.sx += this.stepSx
    }
    this.el.style.left = this.x + 'px'
    this.el.style.top = this.y + 'px'
    this.el.style.transform = `translate3d(${this.x}px, ${this.y}px, ${this.z}px)`
  }
}

export default Snow
