<template>
<!--  v-on: 用在自定义元素组件上时，也可以监听子组件触发的自定义事件 -->
    <el-select ref="dragSelect" v-model="selectVal">
        <slot />
    </el-select>
</template>

<script>

import Sortable from 'sortablejs'

export default {
    name: 'DragSelectDemo',
    props: {
        value: {
            type: Array,
            required: true
        }
    },
    // https://www.cnblogs.com/gunelark/p/8492468.html
    computed: {
        selectVal: {
            get() {
                return [...this.value]
            },
            set(val) {
                this.$emit('input', [...val])
            }
        }
    },
    mounted() {
        this.setSort()
    },
    methods: {
        setSort(){
            const el = this.$refs.dragSelect.$el.querySelectorAll('.el-select__tags > span')[0]
            this.sortable = Sortable.create(el, {
                ghostClass: "sortable-ghost",  // Class name for the drop placeholder
                setData: function (/** DataTransfer */dataTransfer) {
                    dataTransfer.setData('Text', ''); // `dataTransfer` object of HTML5 DragEvent

                    // to avoid Firefox bug
                    // Detail see : https://github.com/RubaXa/Sortable/issues/1012
                },
                // Element dragging ended
                onEnd: function (/**Event*/evt) {
                    const targetRow = this.value.splice(evt.oldIndex, 1)[0]
                    this.value.splice(evt.newIndex, 0, targetRow)
                }                
            })
        }
    }
}
</script>