<script setup>
import TheWelcome from '@/components/HomeComponent/TheWelcome.vue'
import Programs from '@/components/HomeComponent/ProgramsComp.vue'
import Lifestyle from '@/components/HomeComponent/LifestyleComp.vue'
</script>

<template>
  <main>
    <section class="home_section">
    <h1>This is Homepage</h1>
    
    <section class="about_section"><TheWelcome /></section>
    <section class="program_section"><Programs /></section>
    <section class="card_section">Discover More</section>
    <section class="lifestyle_section"><Lifestyle /></section>
    <section class="why_section">Why Choose Us?</section>
  </section>
  </main>
</template>
