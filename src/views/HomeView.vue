<script setup>
import TheWelcome from '@/components/HomeComponent/TheWelcome.vue'
import Programs from '@/components/HomeComponent/ProgramsComp.vue'
import Cards from '@/components/HomeComponent/CardComp.vue'
import Lifestyle from '@/components/HomeComponent/LifestyleComp.vue'
import ChooseUs from '@/components/HomeComponent/ChooseUs.vue'

</script>

<template>
  <main>
    <section class="home_section">
    <section class="about_section"><TheWelcome /></section>
    <section class="program_section" ><Programs /></section>
    <section class="card_section"><Cards /></section>
    <section class="lifestyle_section"><Lifestyle /></section>
    <section class="why_section"><ChooseUs /></section>
  </section>
  </main>
</template>

<style>



.program_section .content_section, .card_section .content_section, .why_section .content_section, .footer_section .content_section{
    max-width: 1100px;
    margin: 50px auto;
}


@media (max-width: 575.98px){
  
.why_section .content_section{
    margin: 30px auto;
}
}



</style>
