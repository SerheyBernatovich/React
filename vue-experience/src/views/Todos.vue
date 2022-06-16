<template>
  <div>
    <h2>Todo application</h2>
    <AddTodo @add-todo="addTodo" />
    <hr />
    <TodoList v-bind:todos="todos" @removeTodo="removeEnd" />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';
export default {
  name: 'App',
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => response.json())
      .then((json) => (this.todos = json));
  },
  methods: {
    removeEnd(id) {
      this.todos = this.todos.filter((i) => i.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
  components: { TodoList, AddTodo },
};
</script>
