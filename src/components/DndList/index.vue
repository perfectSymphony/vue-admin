<template>
    <div class="dndList">
        <div class="dndList-list">
            
        </div>
        <div class="dndList-list">

        </div>
    </div>
</template>

<script>

import draggable from 'vuedraggable'

export default {
    name: 'DndList',
    components: {
        draggable
    },
    props: {
        list1: {
            type: Array,
            default(){
                return []
            }
        },
        list2: {
            type: Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {

        }
    }

}
</script>

<style lang='scss' scoped>
.dndList {
    background-color: #fff;
    padding-bottom: 40px;
    border: 1px solid red;

    .dndList-list {
        float: left;
        border: 1px solid #999;
        width: 50%;
        padding-bottom: 30px;

    }
}
</style>