<template>
  <div id="app">
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
      this.tasks.unshift({name: taskName, pending: true});
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

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #8E2DE2;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #4A00E0, #8E2DE2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-family: 'Poppins', sans-serif;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
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

a {
  position: absolute;
  right: -60px;
  cursor: pointer;
}

</style>
