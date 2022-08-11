<template>
  <div class="content_section my-5 d-none d-lg-block">
    <div class="row">
        <div class="col">
            <h3 class="progConcgTittle">{{ $t('concierge.programs1.title') }}</h3>
            <p>{{ $t('concierge.programs1.desc') }}</p>
        </div>
        <div class="col">
            <img src="../../assets/conciergeAssets/image1.jpg" alt="img" style="max-width:265px">
        </div>
        <div class="col progConcg2">
            <img src="../../assets/conciergeAssets/image2.jpg" alt="img" style="max-width:265px">
        </div>
        <div class="col progConcg2">
            <h3 class="progConcgTittle">{{ $t('concierge.programs2.title') }}</h3>
            <p>{{ $t('concierge.programs2.desc') }}</p>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h3 class="progConcgTittle">{{ $t('concierge.programs3.title') }}</h3>
            <p>{{ $t('concierge.programs3.desc') }}</p>
        </div>
        <div class="col">
            <img src="../../assets/conciergeAssets/image3.jpg" alt="img" style="max-width:265px">
        </div>
        <div class="col progConcg2">
            <img src="../../assets/conciergeAssets/image4.jpg" alt="img" style="max-width:265px">
        </div>
        <div class="col progConcg2">
            <h3 class="progConcgTittle">{{ $t('concierge.programs4.title') }}</h3>
            <p>{{ $t('concierge.programs4.desc') }}</p>
        </div>
    </div>
    <div class="mt-5">
        <!-- <a href="/contactUs" class="button-34">{{ $t('concierge.button') }}</a> -->
        <router-link :to="`/${$i18n.locale}/contactUs`" class="button-34">{{ $t('concierge.button') }}</router-link>
    </div>
  </div>

  <div class="content_section my-5 d-lg-none px-3">
    <div class="row">
        <div class="col-12">
            <h3 class="progConcgTittle">{{ $t('concierge.programs1.title') }}</h3>
            <p>{{ $t('concierge.programs1.desc') }}</p>
        </div>
        <div class="col-12">
            <img src="../../assets/conciergeAssets/image1.jpg" alt="img" style="width:100%">
        </div>
        <div class="col-12 mt-3">
            <h3 class="progConcgTittle">{{ $t('concierge.programs2.title') }}</h3>
            <p>{{ $t('concierge.programs2.desc') }}</p>
        </div>
        <div class="col-12">
            <img src="../../assets/conciergeAssets/image2.jpg" alt="img" style="width:100%">
        </div>

        <div class="col-12 mt-3">
             <h3 class="progConcgTittle">{{ $t('concierge.programs3.title') }}</h3>
            <p>{{ $t('concierge.programs3.desc') }}</p>
        </div>
        <div class="col-12">
            <img src="../../assets/conciergeAssets/image3.jpg" alt="img" style="width:100%">
        </div>
        <div class="col-12 mt-3">
           <h3 class="progConcgTittle">{{ $t('concierge.programs4.title') }}</h3>
            <p>{{ $t('concierge.programs4.desc') }}</p>
        </div>
        <div class="col-12">
            <img src="../../assets/conciergeAssets/image4.jpg" alt="img" style="width:100%">
        </div>
    </div>
    <div class="mt-5">
        <!-- <a href="/contactUs" class="button-34">{{ $t('concierge.button') }}</a> -->
        <router-link :to="`/${$i18n.locale}/contactUs`" class="button-34">{{ $t('concierge.button') }}</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.programConcierge_section .content_section{
  max-width: 1100px;
  margin: auto;
}

.programConcierge_section .content_section p{
  text-align: justify;
  opacity: 0.7;
}

.progConcg2{
    margin-top: 40px !important;
}

.progConcgTittle{
    color: var(--thirdcolor);
}

</style>