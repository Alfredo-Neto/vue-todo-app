<template>
  <div>
    <p>{{ task.name }}</p>
    <button type="button" @click="removeEvent">Remover</button>
    <input type="checkbox" @click="pendingEvent" :checked="task.pending">
  </div>
</template>

<script>
export default {
  props: {
    task: { required: true, type: Object },
  },
  methods: {
    removeEvent(){
      this.$emit('removeEvent', this.task)
    },
    pendingEvent(){
      this.$emit('pendingEvent', this.task)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
