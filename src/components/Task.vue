<template>
  <div>
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: { required: true, type: String },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
