<template>
  <div class="content_section d-none d-lg-block">
        <div class="row mx-0">
            <div class="col-lg-7">
                <img src="../../assets/valueProgAssets/featur1.jpg" alt="" style="width:100%;">
            </div>
            <div class="col-lg-5">
                <div class="col-12 text-start">
                    <h2 class="bigTitle">{{ $t('valueProg.programs1.title') }}</h2>
                </div>
                <div class="col-12 text-justify" style="text-align:justify;">
                    <p v-html="$t('valueProg.programs1.desc')"></p>
                </div>
            </div>
        </div>
        <div class="row my-4 mx-0">
            <div class="col-lg-5">
                <div class="col-12 text-start">
                    <h2 class="bigTitle">{{ $t('valueProg.programs2.title') }}</h2>
                </div>
                <div class="col-12" style="text-align:justify;">
                    <p>{{ $t('valueProg.programs2.desc') }}</p>
                </div>
            </div>
            <div class="col-lg-7">
                <img src="../../assets/valueProgAssets/featur2.jpg" alt="" style="width:100%;">
            </div>
        </div>
  </div>


<!-- ///////////////////////////// Mobile View ///////////////////////////////////////////// -->
  <div class="content_section d-lg-none">
        <div class="row mx-0">
            <div class="col-lg-7">
                <img src="../../assets/valueProgAssets/featur1.jpg" alt="" style="width:100%;">
            </div>
            <div class="col-lg-5 my-3">
                <div class="col-12 text-start">
                    <h2 class="bigTitle">{{ $t('valueProg.programs1.title') }}</h2>
                </div>
                <div class="col-12 text-justify" style="text-align:justify;">
                    <p v-html="$t('valueProg.programs1.desc')"></p>
                </div>
            </div>
        </div>
        <div class="row mx-0">
            <div class="col-lg-7">
                <img src="../../assets/valueProgAssets/featur2.jpg" alt="" style="width:100%;">
            </div>
            <div class="col-lg-5 my-3">
                <div class="col-12 text-start">
                    <h2 class="bigTitle">{{ $t('valueProg.programs2.title') }}</h2>
                </div>
                <div class="col-12" style="text-align:justify;">
                    <p>{{ $t('valueProg.programs2.desc') }}</p>
                </div>
            </div>
        </div>
  </div>

  <!-- ///////////////////////////// Mobile View ///////////////////////////////////////////// -->


  
</template>

<script>
export default {

}
</script>

<style>

.programValue_section .content_section{
  max-width: 1100px;
  margin: auto;
}



</style>