<template>
  <div class="tasks">
    <ul>
        <li v-for="task in tasks" :key="task.id">
            <Task :title="task.title" :content="task.content"/>
        </li>
    </ul>
  </div>
</template>

<script>

import Task from '@/components/Task.vue'
export default {
  name: 'Tasks',
  components: {
    Task
  },
  data() {
    return {
      tasks: [
          {id: 0, title: 'Minha task 1', content: 'jogar o lixo'},
          {id: 1, title: 'Minha task 2', content: 'lavar a louca'},
          {id: 2, title: 'Minha task 3', content: 'programar'}
      ],
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
