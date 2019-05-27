<template>
    <li class="todo">
        <div class="view">
            <input type="checkbox" class="toggle">
            <label for="">star this repository</label>
            <button class="destroy">

            </button>
        </div>
        <input type="text" class="edit">
    </li>
</template>
<script>
export default {
    name: 'Todo',
    directives:{
        focus(el, { value }, { context }){
            if(value){
                context.$nextTick(() => {
                    el.focus()
                })
            }
        }
    },
    props: {
        todo: {
            type: Object,
            default: function(){
                return {}
            }
        }
    },
    data(){
        return {
            editing: false
        }
    },
    methods: {
        
    }
}
</script>
<style lang="scss" scoped>

</style>
