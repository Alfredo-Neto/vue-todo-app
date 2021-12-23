<template>
  <div class="task">
    <p>{{ task.name }}</p>
    <a type="button" @click="removeEvent">x</a>
    <input type="checkbox" @click="pendingEvent" :checked="!task.pending">
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
.task {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
}

</style>
