<template>
<div class="imgFAQ w-100">
    <div class="bg-dark bg-opacity-25 w-100 h-100 d-flex flex-row-reverse d-flex align-items-center" style="padding: 10px 15vw;">
        <div>
            <h1 class="faqTitle">{{ $t('faq.title') }}</h1>
            <h3>{{ $t('faq.desc') }}</h3>
        </div>
    </div>
</div>
  <div class="bg_section">
    <div class="content_section py-3 py-lg-5 px-4">
        <div class="mb-4">
            <h2>{{ $t('faq.title2') }}</h2>
        </div>
        <div class="row faqContainer">
            <div @click="faq1Active = !faq1Active" :class="{'active' : faq1Active}" class="col-12 border d-flex align-items-center p-3 faqQs">
                <strong><p>{{ $t('faq.qs1') }}</p></strong>
            </div>
            <Transition name="slide-fade">
            <div v-if="faq1Active" class="col-12 d-flex align-items-center p-3 faqAns">
                <p>{{ $t('faq.ans1') }}</p>
            </div>
            </Transition>
            <div @click="faq2Active = !faq2Active" :class="{'active' : faq2Active}" class="col-12 border d-flex align-items-center p-3 faqQs">
                <strong><p>{{ $t('faq.qs2') }}</p></strong>
            </div>
            <Transition name="slide-fade">
            <div v-if="faq2Active" class="col-12 d-flex align-items-center p-3 faqAns">
                <p>{{ $t('faq.ans2') }}</p>
            </div>
            </Transition>
            <div @click="faq3Active = !faq3Active" :class="{'active' : faq3Active}" class="col-12 border d-flex align-items-center p-3 faqQs">
                <strong><p>{{ $t('faq.qs3') }}</p></strong>
            </div>
            <Transition name="slide-fade">
            <div v-if="faq3Active" class="col-12 d-flex align-items-center p-3 faqAns">
                <p>{{ $t('faq.ans3') }}</p>
            </div>
            </Transition>
            <div @click="faq4Active = !faq4Active" :class="{'active' : faq4Active}" class="col-12 border d-flex align-items-center p-3 faqQs">
                <strong><p>{{ $t('faq.qs4') }}</p></strong>
            </div>
            <Transition name="slide-fade">
            <div v-if="faq4Active" class="col-12 d-flex align-items-center p-3 faqAns">
                <p>{{ $t('faq.ans4') }}</p>
            </div>
            </Transition>
        </div>
    </div>
  </div>
</template>

<script>
export default {

    data() {
      return {
        faq1Active: false,
        faq2Active: false,
        faq3Active: false,
        faq4Active: false,
      }
    },

}
</script>

<style>

.faqTitle{
    font-weight: bold;
    color: var(--thirdcolor);
}

.imgFAQ{
  background-image: url(../../assets/FAQAssets/bg.jpg);
  background-size: cover;
  background-position: 60% 0%;
  background-repeat: no-repeat;
  height: 35vw;
  /* filter: brightness(70%); */
  text-align: left;
  color: white;
  
}

.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.faq_section .content_section{
    max-width: 1100px;
    margin: auto;
}

.faqContainer{
    text-align: start;
}

.faqContainer p{
    text-align: start;
    margin-bottom: 0;
}

.faqQs.active{
    color: var(--thirdcolor);
}

.faqAns{
    border-right: 1px solid #DEE2E6;
    border-left: 1px solid #DEE2E6;
}


</style>