<template>
<section>
  <div class="bg_section d-none d-lg-block">
    <div class="bg-dark bg-opacity-50 h-100 d-flex align-items-end pb-lg-5">
      <div class="content_section px-3 px-lg-0">
      <h1 class="bigTitle">{{ $t('aboutUs.title') }}</h1>
      <p>{{ $t('aboutUs.desc1') }}</p>
      <p class="text-end bigTitle">{{ $t('aboutUs.desc2') }}</p>
    </div>
    </div>
  </div>


<!-- ///////////////// Mobile Version ///////////////////////// -->
  <div class="bg_section d-lg-none">
    <div class="bg-dark bg-opacity-50 pb-lg-5">
      <div class="content_section py-5 px-3 px-lg-0">
      <h1 class="bigTitle2">{{ $t('aboutUs.title') }}</h1>
      <p >{{ $t('aboutUs.desc1') }}</p>
      <p class="text-end bigTitle m-0">{{ $t('aboutUs.desc2') }}</p>
    </div>
    </div>
  </div>


  <!-- ///////////////// Mobile Version ///////////////////////// -->
</section>
</template>

<script>
export default {

}
</script>

<style>
.about_section .bg_section{
  background-image: url(../../assets/homeAssets/background.jpg);
  background-size:100%;
  height: 600px;
  background-repeat: no-repeat;
  
}

.about_section .content_section{
  text-align: start;
  max-width: 950px;
  margin: 0 auto;
  color: white;
  text-shadow: 2px 2px black;
}

.this_section::before{
  filter: brightness(50%);
  
}

.about_section .content_section p {
  font-size: 20px;
}

.bigTitle2{
  color: var(--secondcolor);
  font-size: 25px;
}


@media (max-width: 575.98px){

  .about_section .bg_section{
  width: 100%;
  height: unset;
  
}
  
.about_section .content_section p {
  font-size: 14px;
}
}

</style>