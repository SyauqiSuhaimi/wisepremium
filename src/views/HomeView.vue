<script setup>
import TheWelcome from '@/components/HomeComponent/TheWelcome.vue'
import Programs from '@/components/HomeComponent/ProgramsComp.vue'
import Lifestyle from '@/components/HomeComponent/LifestyleComp.vue'
import ChooseUs from '@/components/HomeComponent/ChooseUs.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <main>
    <section class="home_section">
    <section class="about_section"><TheWelcome /></section>
    <section class="program_section" ><Programs /></section>
    <section class="card_section">Discover More</section>
    <section class="lifestyle_section"><Lifestyle /></section>
    <section class="why_section"><ChooseUs /></section>
  </section>
  </main>
  <section class="footer_section"><Footer /></section>
</template>

<style>

.bigTitle {
  color:#F4DCBC;
}

.smallTitle {
  color:#F4DCBC;
}


</style>
