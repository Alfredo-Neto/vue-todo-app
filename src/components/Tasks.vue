<template>
  <div class="tasks">
    <ul>
        <li v-for="task in tasks" :key="task.id">
            <Task :name="task.name"/>
        </li>
    </ul>
  </div>
</template>

<script>

import Task from '@/components/Task.vue'
export default {
  props: {
    tasks: {type: Array, required: true}
  },
  components: {
    Task
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
}
</style>
