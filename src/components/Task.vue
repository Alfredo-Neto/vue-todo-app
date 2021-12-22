<template>
  <div>
    <h2> {{ title }} </h2>
    <p> {{ content }} </p>
  </div>
</template>

<script>
export default {
  props: {
    title: { required: true, type: String },
    content: { required: true, type: String },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
