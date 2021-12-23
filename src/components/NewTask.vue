<template>
  <form>
    <input type="text" v-model="name" @keydown.enter.prevent="updateTasks">
    <button type="button" @click="updateTasks">+</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  props: {
    tasks: {type: Array, required: true}
  },
  methods: {
    updateTasks(){
      this.$emit('addTaskEvent', this.name)
      this.name = ''
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
