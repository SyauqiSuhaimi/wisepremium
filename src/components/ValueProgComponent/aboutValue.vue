<template>
<section>
    <div class="bg_section">
        <div class="imgPlace w-100"></div>
        <!-- <img id="myImg" class="mb-4" src="../../assets/valueProgAssets/bg.jpg"> -->
        <div class="content_section py-5">
            <h1>{{ $t('valueProg.about.title') }}</h1>
            <div class="row mt-lg-4 mx-0">
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-lg-2 p-0">
                            <img src="../../assets/valueProgAssets/icon1.png" width="60" alt="">
                        </div>
                        <div class="col-lg-10 " style="text-align :justify">
                            <p class="chooseTitle">{{ $t('valueProg.features1.title') }}</p>
                            <p>{{ $t('valueProg.features1.desc') }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 ">
                    <div class="row ">
                        <div class="col-lg-2 p-0">
                            <img src="../../assets/valueProgAssets/icon2.png" width="60" alt="">
                        </div>
                        <div class="col-lg-10 " style="text-align :justify">
                            <p class="chooseTitle">{{ $t('valueProg.features2.title') }}</p>
                            <p>{{ $t('valueProg.features2.desc') }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 ">
                    <div class="row ">
                        <div class="col-lg-2 p-0">
                            <img src="../../assets/valueProgAssets/icon3.png" width="60" alt="">
                        </div>
                        <div class="col-lg-10 " style="text-align :justify">
                            <p class="chooseTitle">{{ $t('valueProg.features3.title') }}</p>
                            <p>{{ $t('valueProg.features3.desc') }}</p>
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


.aboutValue_section .content_section{
  max-width: 1100px;
  margin: 0 auto;
  /* color: white; */
}

.imgPlace{
  background-image: url(../../assets/valueProgAssets/bg.jpg);
  background-size: cover;
  background-position: 0% 30%;
  background-repeat: no-repeat;
  height: 40vw;
}

</style>