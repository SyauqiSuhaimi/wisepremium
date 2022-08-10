<template>
  <div class="bg_section">
    <div class="content_section">
        <div>
            <h2>Here are some of the frequently asked questions</h2>
        </div>
        <div class="row border faqContainer">
            <div @click="faq1Active = !faq1Active" class="col-12 border d-flex align-items-center p-3 faqQs">
                <strong><p>How do I become Wise Premium member?</p></strong>
            </div>
            <div v-show="faq1Active" class="col-12 border d-flex align-items-center p-3 faqAns">
                <p>To become a Wise Premium member, you need to open an account. The process is very quick and easy. You can download the app from App or Play Stores to register.</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

    data() {
      return {
        faq1Active: false,
        faq1Active2: false,
        faq2Active: false,
        faq3Active: false,
      }
    },

}
</script>

<style>

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


</style>