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

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #8E2DE2;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #4A00E0, #8E2DE2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-family: 'Poppins', sans-serif;
  padding-top: 30px;
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