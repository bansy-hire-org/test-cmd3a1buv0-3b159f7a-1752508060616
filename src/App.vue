<template>
  <div id="app">
    <h1>Task Manager</h1>
    <div class="input-group">
      <input type="text" v-model="newTask" placeholder="Add a task" @keyup.enter="addTask">
      <button @click="addTask">Add</button>
    </div>
    <ul>
      <li v-for="(task, index) in tasks" :key="index" :class="{ completed: task.completed }">
        <span @click="toggleComplete(index)">{{ task.name }}</span>
        <button @click="deleteTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: [
        { name: 'Learn Vue.js', completed: true },
        { name: 'Build a Task Manager', completed: false }
      ]
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ name: this.newTask, completed: false });
        this.newTask = '';
      }
    },
    toggleComplete(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.input-group {
  margin-bottom: 20px;
}

input[type="text"] {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

li {
  list-style: none;
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

li.completed {
  text-decoration: line-through;
  color: #aaa;
}
</style>