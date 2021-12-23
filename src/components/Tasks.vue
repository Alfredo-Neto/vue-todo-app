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

li {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 700px;
  padding: 25px 100px;
  margin: 20px 0;
  background-color: rgba(238, 238, 238, 0.212);
}

li:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>
