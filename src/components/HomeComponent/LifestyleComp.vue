<template>
<section>
  <div class="bg_section">
    <div class="bg-dark bg-opacity-50 h-100 bg2_section">
      <div class="content_section">
      <h1 class="smallTitle">{{ $t('lifestyle.title') }}</h1>
      <p>{{ $t('lifestyle.desc') }}</p>
    </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'LifestyleComp',
}
</script>

<style>

.lifestyle_section .bg_section{
  background-image: url(../../assets/homeAssets/background2.jpg);
  background-size:100%;
  color: white;
  height: 600px;
}

.lifestyle_section .bg2_section{
  padding-top: 80px;
  padding-bottom: 200px;
}

.lifestyle_section .content_section{
  max-width: 500px;
  margin: 0 auto;
}

</style>