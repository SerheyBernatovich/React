<template>
  <div>
    <ul>
      <TodoItem
        v-bind:todo="todo"
        v-for="(todo, i) of todos"
        v-bind:index="i"
        v-on:remove-todo="remove"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem';
export default {
  props: ['todos'],
  components: { TodoItem },
  methods: {
    remove(id) {
      this.$emit('removeTodo', id);
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
