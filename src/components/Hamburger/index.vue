<template>

    <div style="padding: 0 15px;">
        <!-- svg中viewBox (0 0 200 200) :0 0 表示x轴和y有的其实位置，后面200, 200 表示长和宽但是只是一个数量，不会有具体的长度
        那么如何让这样一个svg在长宽为100*100px的div中显示全呢？
        viewBox就是干这个的
        1/2 = 100（实际viewport大小） / 200（viewBox视窗大小）
        svg 中所有的尺寸 * 1/2，这样就完全显示在100 * 100的容器中了 -->
        <!-- viewbox="x, y, width, height" -->
        <!-- viewBox形象的解释就是：SVG就像是我们的显示器屏幕，viewBox就是截屏工具选中的那个框框，最终的呈现就是把框框中的截屏内容再次在显示器中全屏显示！ -->
        <svg
           class="hamburger"
           viewBox="0 0 1024 1024"
           xmlns="http://www.w3.org/2000/svg"
           width="64"
           height="64"            
        >
        <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />            
        </svg>
    </div>
</template>
<script>
export default {
    name: 'Hamburger',
    props: {
        isActive: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.hamburger{
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
}

.hamburger.is-active {
    transform: rotate(180deg)
}
</style>
