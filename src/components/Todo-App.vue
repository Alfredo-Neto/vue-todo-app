<template>
  <div id="todo-app">
      <h1>To-Do List</h1>
      <new-task :tasks="tasks" @addTaskEvent="addTask" />
      <Tasks :tasks="tasks" @persistEvent="persistTask"/>
  </div>
</template>

<script>

import Tasks from '@/components/Tasks.vue'
import NewTask from '@/components/NewTask.vue'
export default {
  data() {
    return {
      tasks: [],
    }
  },
  components: {
    Tasks,
    NewTask
  },
  mounted() {
    if (localStorage.getItem('tasks')) {
      try {
        this.tasks = JSON.parse(localStorage.getItem('tasks'))
      } catch (error) {
        localStorage.removeItem('tasks')
      }
    }
  },
  methods: {
    addTask(taskName) {
      if(!taskName) {
        return
      }
      this.tasks.push({name: taskName, pending: true});
      this.persistTask()
    },
    persistTask(){
      const parsedTasks = JSON.stringify(this.tasks)
      localStorage.setItem('tasks', parsedTasks)
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#todo-app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
}

input[type=text] {
  width: 500px;
  padding: 12px 20px;
  outline: none;
  border-radius: 10px;
}

input[type=text]:focus { 
    border-color:#4A00E0;
    box-shadow:0 0 10px #8E2DE2;
}

.tasks input {
  position: absolute;
  right: 10px;
  top: 7px;
  cursor: pointer;
}

button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  margin: 10px;
  transition-duration: 0.4s;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
}

button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  background-color: #47a54a; 
}

#todo-app a {
  position: absolute;
  right: -60px;
  cursor: pointer;
}

#todo-app h1 {
  margin-right: 35px;
}

</style>
