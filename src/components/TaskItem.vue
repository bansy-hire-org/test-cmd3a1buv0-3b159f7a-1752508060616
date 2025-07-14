<template>
  <li>
    <span @click="toggleComplete">{{ task.name }}</span>
    <button @click="deleteTask">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    toggleComplete() {
      this.$emit('toggle-complete', this.index);
    },
    deleteTask() {
      this.$emit('delete-task', this.index);
    }
  }
}
</script>
