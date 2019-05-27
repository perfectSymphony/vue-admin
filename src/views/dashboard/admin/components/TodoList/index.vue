<template>
    <section class="todoapp">
        <!-- header -->
        <header class="header">
            <input type="text" class="new-todo" autocomplete="off" placeholder="Todo List" >
        </header>
        <!-- main section -->
        <section class="main">
            <input  type="checkbox" id="toggle-all" class="toggle-all" >
            <label for="toggle-all"></label>
            <ul class="todo-list">
                <todo 
                 
                />
            </ul>
        </section>
        <!-- footer -->
        <footer class="footer"> 
            <span class="todo-count">
                <strong>8</strong>
                items left
            </span> 
            <ul class="filters">
                <li>
                    <a href="javascript:;">All</a>
                </li>
                <li>
                    <a href="javascript:;">Active</a>
                </li>
                <li>
                    <a href="javascript:;">Completed</a>
                </li>
            </ul>
        </footer>
    </section> 
</template>
<script>
import Todo from './Todo.vue'

const STORAGE_KEY = 'todos'
const filters = {
    all: todos => todos,
    active: todos => todos.filter(todo => !todo.done),
    completed: todos => todos.filter(todo => todo.done)
}

const defaultList = [
  { text: 'star this repository', done: false },
  { text: 'fork this repository', done: false },
  { text: 'follow author', done: false },
  { text: 'vue-element-admin', done: true },
  { text: 'vue', done: true },
  { text: 'element-ui', done: true },
  { text: 'axios', done: true },
  { text: 'webpack', done: true }
]

export default {
    name: 'TodoList',
    components: {
        Todo
    }
}
</script>
<style lang="scss" scoped>
    @import './index.scss'
</style>
