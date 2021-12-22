<template>
  <div id="app">
    <h1>To-Do List</h1>
      <new-task :tasks="tasks" @addTask="addTask" />
      <Tasks :tasks="tasks"/>
  </div>
</template>

<script>

import Tasks from '@/components/Tasks.vue'
import NewTask from '@/components/NewTask.vue'
export default {
  data() {
    return {
      tasks: [
          {name: 'Minha task 1', pending: true},
          {name: 'Minha task 2', pending: true},
          {name: 'Minha task 3', pending: true}
      ],
    }
  },
  components: {
    Tasks,
    NewTask
  },
  methods: {
    addTask(taskName) {
      this.tasks.push({name: taskName, pending: true});
      console.log(this.tasks);
    },
  }
}
</script>

<style>

</style>
