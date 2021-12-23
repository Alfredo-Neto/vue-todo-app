<template>
  <div>
    <p>{{ task.name }}</p>
    <button type="button" @click="removeTask">Remover</button>
  </div>
</template>

<script>
export default {
  props: {
    task: { required: true, type: Object },
  },
  methods: {
    removeTask(){
      this.$emit('removeEvent', this.task)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
