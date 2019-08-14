<template>
  <div class="components-container board">
      <panel :list="list1" :key="1" :group="group" class="panel todo" header-text="To do"></panel>
      <panel :list="list2" :key="2" :group="group" class="panel doing" header-text="Doing"></panel>
      <panel :list="list3" :key="3" :group="group" class="panel done" header-text="Done"></panel>
  </div>
</template>

<script>

import panel from '@/components/panel'

export default {
    name: 'dragKanbanDemo',
    components: {
        panel
    },
    data(){
        return {
            group: 'Mission',
            list1: [
                { name: 'Mission', id: 1 },
                { name: 'Mission', id: 2 },
                { name: 'Mission', id: 3 },
                { name: 'Mission', id: 4 }
            ],
            list2: [
                { name: 'Mission', id: 6 },
                { name: 'Mission', id: 7 },
                { name: 'Mission', id: 8 },
                { name: 'Mission', id: 9 },
                { name: 'Mission', id: 10 }
            ],
            list3: [
                { name: 'Mission', id: 11 },
                { name: 'Mission', id: 12 },
                { name: 'Mission', id: 13 },
                { name: 'Mission', id: 14 },
                { name: 'Mission', id: 15 }
            ]
        }
    }
}
</script>

<style lang='scss'>
.board {
    width: 1000px;
    margin-left: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: flex-start;
}

.panel {
    &.todo {
        .board-column-header {
            background: #4A9FF9;
        }
    }
    &.doing {
        .board-column-header {
            background: #f9944a;
        }
    }
    &.done {
        .board-column-header {
            background:  #2ac06d;
        }
    }
}
</style>