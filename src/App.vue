<template>
  <div id="app">
     <nav>
       <router-link to="/">Home</router-link>
       <router-link to="/about">About</router-link>
     </nav>

     <router-view></router-view>
  </div>
</template>

<script>

export default {
}
</script>

<style>
body {
  padding-top: 50px;
}

nav {
  padding: 20px 20px 20px 0;
  display: flex;
  justify-content: center;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}

</style>