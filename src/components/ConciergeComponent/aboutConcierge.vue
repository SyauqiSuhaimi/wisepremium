<template>
<section>
  <div class="content_section">
    <h1 class="bigTitle">{{ $t('aboutUs.title') }}</h1>
    <p>{{ $t('aboutUs.desc1') }}</p>
    <p class="text-end">{{ $t('aboutUs.desc2') }}</p>
  </div>
</section>
</template>

<script>
export default {

}
</script>

<style>

.about_section .content_section{
  text-align: start;
  max-width: 950px;
  margin: 0 auto;
}

.about_section .content_section p {
  font-size: 20px;
}

</style>