<script setup>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
</script>

<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <section class="footer_section"><Header /></section>
  <router-view/>
  <section class="footer_section"><Footer /></section>
</template>



<style>
:root {
  --primecolor:   #F4DCBC;
  --secondcolor:  #EFBC7B;
  --thirdcolor:  #CD9F7A;
  --bgcolor:  black;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family:"Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

p {
  font-size: 18px;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
