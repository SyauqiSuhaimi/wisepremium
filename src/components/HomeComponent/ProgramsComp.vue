<template>
  <section>
    <div class="bg_section d-none d-lg-block">
      <div class="content_section">
        <div class="row mb-5">
          <div class="col-lg-6 px-0 image_Place">
            <div class="imageContainer"><img src="../../assets/homeAssets/content1.jpg" alt="img" style="width:100%"></div>
          </div>
          <div class="col-lg-6 text-justify programs_content d-flex align-items-center px-4">
            <div>
              <h3 class="smallTitle">{{ $t('programs.content1.title') }}</h3>
              <p>{{ $t('programs.content1.desc') }}</p>
            </div>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-lg-6 programs_content d-flex align-items-center px-4 " style="direction:rtl;">
          <div>
            <h3 class="smallTitle">{{ $t('programs.content2.title') }}</h3>
            <p>{{ $t('programs.content2.desc') }}</p>
          </div>
          </div>
          <div class="col-lg-6 px-0 image_Place">
            <div class="imageContainer"><img src="../../assets/homeAssets/content2.jpg" alt="img" style="width:100%"></div>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-lg-6 px-0 image_Place">
            <div class="imageContainer"><img src="../../assets/homeAssets/content3.jpg" alt="img" style="width:100%"></div>
          </div>
          <div class="col-lg-6 text-justify programs_content d-flex align-items-center px-4">
            <div>
              <h3 class="smallTitle">{{ $t('programs.content3.title') }}</h3>
              <p>{{ $t('programs.content3.desc') }}</p>
            </div>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-lg-6 programs_content d-flex align-items-center px-4" style="direction:rtl;">
          <div>
            <h3 class="smallTitle">{{ $t('programs.content4.title') }}</h3>
            <p>{{ $t('programs.content4.desc') }}</p>
          </div>
          </div>
          <div class="col-lg-6 px-0 image_Place">
            <div class="imageContainer"><img src="../../assets/homeAssets/content4.jpg" alt="img" style="width:100%"></div>
          </div>
        </div>
      </div>
    </div>


<!-- ///////////////////////////////// Mobile View ///////////////////////////  -->
        <div class="bg_section d-lg-none">
      <div class="content_section">
        <div class="row mx-0">
          <div class="col-lg-6 px-0 image_Place">
            <div class="imageContainer"><img src="../../assets/homeAssets/content1.jpg" alt="img" style="width:100%"></div>
          </div>
          <div class="col-lg-6 text-justify programs_content d-flex align-items-center px-4">
            <div>
              <h3 class="smallTitle">{{ $t('programs.content1.title') }}</h3>
              <p>{{ $t('programs.content1.desc') }}</p>
            </div>
          </div>
        </div>
        <div class="row mx-0">
          <div class="col-lg-6 px-0 image_Place">
            <div class="imageContainer"><img src="../../assets/homeAssets/content2.jpg" alt="img" style="width:100%"></div>
          </div>
          <div class="col-lg-6 text-justify programs_content d-flex align-items-center px-4">
            <div>
              <h3 class="smallTitle">{{ $t('programs.content2.title') }}</h3>
            <p>{{ $t('programs.content2.desc') }}</p>
            </div>
          </div>
        </div>
        <div class="row mx-0">
          <div class="col-lg-6 px-0 image_Place">
            <div class="imageContainer"><img src="../../assets/homeAssets/content3.jpg" alt="img" style="width:100%"></div>
          </div>
          <div class="col-lg-6 text-justify programs_content d-flex align-items-center px-4">
            <div>
              <h3 class="smallTitle">{{ $t('programs.content3.title') }}</h3>
              <p>{{ $t('programs.content3.desc') }}</p>
            </div>
          </div>
        </div>

        <div class="row mx-0">
          <div class="col-lg-6 px-0 image_Place">
            <div class="imageContainer"><img src="../../assets/homeAssets/content4.jpg" alt="img" style="width:100%"></div>
          </div>
          <div class="col-lg-6 text-justify programs_content d-flex align-items-center px-4">
            <div>
              <h3 class="smallTitle">{{ $t('programs.content4.title') }}</h3>
              <p>{{ $t('programs.content4.desc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
</template>

<script>
export default {
  name: 'ProgramsComp',

}
</script>

<style>


.program_section .bg_section{
  background-color: var(--bgcolor);
  color: white;
  padding: 10px 0;
}

/* .program_section .content_section{
  max-width: 1050px;
  margin: 0 auto;
} */

/* .image_Place{
  padding: 0;
} */

.programs_content{
  padding: 20px;
  text-align: justify;
}

/* .programs_title{
  color: #F4DCBC
} */

.imageContainer{
  width:100%;
  max-height:270px;
}

.imageContainer1{
  width:100%;
  max-height:270px;
  /* background-position: center; */
  /* background-size: cover; */
  /* background-image: url(../../assets/homeAssets/content1.jpg); */
}
/* .imageContainer2{
  width:100%;
  height:270px;
  background-position: center;
  background-size: cover;
  background-image: url(../../assets/homeAssets/content2.jpg);
} */
/* .imageContainer3{
  width:100%;
  height:270px;
  background-position: center;
  background-size: cover;
  background-image: url(../../assets/homeAssets/content3.jpg);
} */
/* .imageContainer4{
  width:100%;
  height:270px;
  background-position: center;
  background-size: cover;
  background-image: url(../../assets/homeAssets/content4.jpg);
} */

@media (max-width: 575.98px){
  
.program_section .content_section{

  margin: 30px auto !important;
}
}


</style>