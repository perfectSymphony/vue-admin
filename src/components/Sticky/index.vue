<template>
    <div :style="{zIndex: zIndex, height: height+'px'}">
        <div :class="className" :style="{ top: (isSticky ? stickTop + 'px' : ''), zIndex: zIndex, height: height+'px', width: width, position: position}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'sticky',
    props: {
        stickTop: {
            type: Number,
            default: 0
        },
        zIndex: {
            type: Number,
            default: 1
        },
        className: {
            type: String,
            default: ''
        }
    },
    data(){
        return {
            active: false,
            position: '',
            width: undefined,
            height: undefined,
            isSticky: false
        }
    },
    mounted(){
        this.height = this.$el.getBoundingClientRect().height
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.handleResize)
    },
    activated(){
        this.handleScroll()
    },
    destroyed(){
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        sticky(){
            if(this.active) {
                return
            }
            this.position = 'fixed'
            this.active = true
            this.width = this.width + 'px'
            this.isSticky = true
        },
        handleReset(){
            if(!this.active){
                return
            }
            this.reset()
        },
        reset(){
            this.position = ''
            this.width = 'auto'
            this.active = false
            this.isSticky = false
        },
        // getBoundingClientRect用于获取某个元素相对于视窗的位置集合
        // getBoundingClientRect().width --> 父级的宽度+2padding+2border
        // clientWidth等于父级的宽度+2*padding,不包括边框的宽度
        handleScroll(){
            const width = this.$el.getBoundingClientRect().width
            this.width = width || 'auto'
            const offsetTop = this.$el.getBoundingClientRect().top
            if(offsetTop < this.stickTop){
                this.sticky()
                return
            }
            this.handleReset()
        },
        handleResize(){
            if(this.isSticky){
                this.width = this.$el.getBoundingClientRect().width + 'px'
            }
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

