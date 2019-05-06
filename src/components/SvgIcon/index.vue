<template>
<!-- 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。 -->
    <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
        <use xlink:href="iconName"></use>
    </svg>    
</template>

<script>
export default {
    name: 'SvgIcon',
    props: {
        iconClass: {
            type: String,
            required: true
        },
        className: {
            type: String,
            default: ''
        }
    },
    computed: {
        iconName() {
            return `#icon-${this.iconClass}`
        },
        svgClass() {
            if(this.className){
                return 'svg-icon ' + this.className
            } else {
                return 'svg-icon'
            }
        }
    }
}
</script>

<style scoped>
    .svg-icon {
        width: 1em; 
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>


