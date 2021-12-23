<template>
  <div class="tasks">
    <ul>
        <li v-for="(task, n) in tasks" :key="task.name">
            <Task 
            :task="task" 
            @removeEvent="removeTask(n)" 
            @pendingEvent="togglePending(n)" />
        </li>
    </ul>
  </div>
</template>

<script>

import Task from '@/components/Task.vue'
export default {
  props: {
    tasks: {type: Array, required: true},
  },
  components: {
    Task
  },
  methods: {
    removeTask(task){
      this.tasks.splice(task, 1)
      this.persistEvent()
    },
    togglePending(task){
      this.tasks[task]['pending'] = !this.tasks[task]['pending']
      this.persistEvent()
      
      console.log(`Mudou para: ${this.tasks[task]['pending']}`)
      console.log(this.tasks[task])
    },
    persistEvent(){
      this.$emit('persistEvent', this.tasks)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
}
</style>
