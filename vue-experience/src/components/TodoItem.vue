<template>
  <li>
    <span v-bind:class="{ done: todo.complete }">
      <input type="checkbox" v-on:change="todo.complete = !todo.complete" />
      <strong>{{ index + 1 }}</strong>
      {{ todo.title | uppercase }}
    </span>
    <button class="rm" v-on:click="$emit('remove-todo', todo.id)">
      &times;
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  filters: {
    uppercase(v) {
      // console.log(v);
      return v.toUpperCase();
    },
  },
};
</script>
<style scoped>
.done {
  text-decoration: line-through;
}
.rm {
  font-weight: bold;
  border-radius: 50%;
  color: #fff;
  background: red;
}
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}
input {
  margin-right: 1rem;
}
</style>
