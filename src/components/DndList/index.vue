<template>
    <div class="dndList">
        <div class="dndList-list" :style="{ width: widthLeft }">
            <h3>{{ list1Title }}</h3>
            <draggable :list="list1" :set-data="setData" group="article" class="dragArea">
                <div v-for="element in list1" :key="element.id" class="list-complete-item">
                    <div class="list-complete-item-handle">
                        {{ element.id }}[{{ element.author }}]{{ element.title }}
                    </div>
                    <div style="position: absolute; top: 25px; right: 2px;">
                        <span style="float: right; margin-top: -20px; margin-rihgt: 5px;" @click="deleteEle(element)">
                            <i style="color: #ff4949" class="el-icon-delete"></i>
                        </span>
                    </div>
                </div>
            </draggable>
        </div>
        <div class="dndList-list" :style="{ width: widthRight }" style="margin-left: 20px;">
            <h3>{{ list2Title }}</h3>
            <draggable :list="list2" group="article" class="dragArea">
                <div v-for="element in list2" :key="element.id" class="list-complete-item">
                    <div class="list-complete-item-handle2"  @click="pushEle(element)">
                        {{ element.id }}[{{ element.author }}]{{ element.title }}
                    </div>
                </div>
            </draggable>
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
        },
        list1Title: {
            type: String,
            default: 'listLeft'
        },
        list2Title: {
            type: String,
            default: 'listRight'
        },
        widthLeft: {
            type: String,
            default: '48%'
        },
        widthRight: {
            type: String,
            default: '48%'
        }
    },
    methods: {
        isNotInList1(v){
            return this.list1.every(k => v.id !== k.id)
        },
        isNotInList2(v){
            return this.list2.every(k => v.id !== k.id)
        },
        deleteEle(ele) {
            for(const item of this.list1){
                if(item.id === ele.id){
                    const index = this.list1.indexOf(item)
                    this.list1.splice(index, 1)
                    break
                }
            }
            if(this.isNotInList2(ele)){
                // 将新项添加到数组起始位置
                this.list2.unshift(ele)
            }
        },
        setData(datatransfer) {
            datatransfer.setData('Text', '')
        },
        pushEle(ele){
           for(const item of this.list2){
               if(item.id === ele.id){
                   const index = this.list1.indexOf(item)
                   this.list2.splice(index, 1)
                   break
               }
           } 
           if(this.isNotInList1(ele)){
               this.list1.push(ele)
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
    &:after {
        content: '';
        display: table;
        clear: both;
    }

    .dndList-list {
        float: left;
        padding-bottom: 30px;
    }
    
    .dragArea {
        margin-top: 15px;
        min-height: 50px;
        padding-bottom: 30px;
    }
}
.list-complete-item {
    cursor: pointer;
    position: relative;
    font-size: 14px;
    padding: 5px 12px;
    margin-top: 4px;
    border: 1px solid #bfcbd9;
    transition: all 1s;

    .list-complete-item-handle {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-right: 30px;
    }
}

.list-complete-item.sortable-chosen {
  background: #4AB7BD;
}

.list-complete-item.sortable-ghost {
  background: #30B08F;
}

.list-complete-enter,
.list-complete-leave-active {
  opacity: 0;
}

</style>