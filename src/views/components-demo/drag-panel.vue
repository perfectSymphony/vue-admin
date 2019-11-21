<template>
  <div class="components-container board">
    <panel :key="1" :list="todoList" :group="group" class="panel todo" header-text="To do" />
    <panel :key="2" :list="doingList" :group="group" class="panel doing" header-text="Doing" />
    <panel :key="3" :list="doneList" :group="group" class="panel done" header-text="Done" />
  </div>
</template>

<script>

import panel from '@/components/panel'
import { fetchList } from '@/api/article'

export default {
  name: 'DragKanbanDemo',
  components: {
    panel
  },
  data() {
    return {
      group: 'Mission',
      todoList: [],
      doingList: [],
      doneList: []
    }
  },
  created() {
    this.getMission()
  },
  methods: {
    getMission() {
      fetchList().then(response => {
        this.todoList = response.data.items.splice(0, 5)
        this.doingList = response.data.items.splice(0, 10)
        this.doneList = response.data.items.splice(0, 20)
      })
    }
  }
}
</script>

<style lang='scss'>
.board {
    width: 98%;
    margin-left: 15px;
    display: flex;
    justify-content: space-between;
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
