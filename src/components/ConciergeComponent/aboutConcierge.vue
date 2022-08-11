<template>
<section>
    <div class="bg_section">
        <img id="myImg" class="w-100 mb-4" src="../../assets/conciergeAssets/bg.jpg">
        <div class="content_section">
            <h1 class="chooseTitle" style="font-size:60px;">{{ $t('concierge.about.title') }}</h1>
            <div class="row mt-lg-4">
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-2 p-0">
                            <img src="../../assets/conciergeAssets/icon1.png" width="60" alt="">
                        </div>
                        <div class="col-10 " style="text-align :justify">
                            <p class="chooseTitle">{{ $t('concierge.features1.title') }}</p>
                            <p>{{ $t('concierge.features1.desc') }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 ">
                    <div class="row ">
                        <div class="col-2 p-0">
                            <img src="../../assets/conciergeAssets/icon2.png" width="60" alt="">
                        </div>
                        <div class="col-10 " style="text-align :justify">
                            <p class="chooseTitle">{{ $t('concierge.features2.title') }}</p>
                            <p>{{ $t('concierge.features2.desc') }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 ">
                    <div class="row ">
                        <div class="col-2 p-0">
                            <img src="../../assets/conciergeAssets/icon3.png" width="60" alt="">
                        </div>
                        <div class="col-10 " style="text-align :justify">
                            <p class="chooseTitle">{{ $t('concierge.features3.title') }}</p>
                            <p>{{ $t('concierge.features3.desc') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style>


.aboutConcierge_section .content_section{
  max-width: 1100px;
  margin: 0 auto;
  color: white;
}

.aboutConcierge_section .bg_section{
  background-color: var(--bgcolor);
}

</style>