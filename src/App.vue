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

.bigTitle {
  color: var(--secondcolor);
}

.smallTitle {
  color: var(--primecolor);
}

.chooseTitle{
    color: var(--thirdcolor);
    font-size: 20px;
    margin-bottom: 0;
}


/* CSS */
.button-34 {
  background: var(--thirdcolor);
  border-radius: 999px;
  box-shadow: var(--thirdcolor) 0 10px 20px -10px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;
}

@media (max-width: 575.98px){
  
p {
  font-size: 14px;
}

.chooseTitle{
    color: var(--thirdcolor);
    font-size: 18px;
    margin-bottom: 0;
}
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
