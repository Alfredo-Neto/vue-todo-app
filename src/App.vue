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
      console.log(this.tasks);
    },
    persistTask(){
      const parsedTask = JSON.stringify(this.tasks)
      localStorage.setItem('tasks', parsedTask)
    },
  },
}
</script>

<style>

</style>
