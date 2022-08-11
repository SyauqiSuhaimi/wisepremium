<template>
  <main>
    <div>
        <h1 class="mt-5"><strong>{{ $t('terms.title') }}</strong></h1>
        <div class="terms_content px-3">
          <p class="date_updated"><i>{{ $t('terms.dateUpdate') }}</i></p>
          <p style="margin-top:50px;">{{ $t('terms.intro') }}</p>
          <p>{{ $t('terms.intro2') }}</p>

          
          <h5 class="termsTitle"><strong>{{ $t('terms.section1.title') }}</strong></h5>
          <p>{{ $t('terms.section1.desc') }}</p>
          <p v-html="$t('terms.section1.desc2')"></p>
          <p v-html="$t('terms.section1.desc3')"></p>

          <h5 class="termsTitle"><strong>{{ $t('terms.section2.title') }}</strong></h5>
          <p>{{ $t('terms.section2.desc') }}</p>
          <p v-html="$t('terms.section2.desc2')"></p>
          <p v-html="$t('terms.section2.desc3')"></p>
          <p v-html="$t('terms.section2.desc4')"></p>
          <p v-html="$t('terms.section2.desc5')"></p>
          <p v-html="$t('terms.section2.desc6')"></p>
          
          <h5 class="termsTitle"><strong>{{ $t('terms.section3.title') }}</strong></h5>
          <p>{{ $t('terms.section3.desc') }}</p>
          <p v-html="$t('terms.section3.desc2')"></p>
          <p v-html="$t('terms.section3.desc3')"></p>
          <p v-html="$t('terms.section3.desc4')"></p>
          <p v-html="$t('terms.section3.desc5')"></p>
          <p v-html="$t('terms.section3.desc6')"></p>
          <p v-html="$t('terms.section3.desc7')"></p>
          <p v-html="$t('terms.section3.desc8')"></p>
          <p v-html="$t('terms.section3.desc9')"></p>
          <p v-html="$t('terms.section3.desc10')"></p>
          <p v-html="$t('terms.section3.desc11')"></p>
          <p v-html="$t('terms.section3.desc12')"></p>
          <p v-html="$t('terms.section3.desc12')"></p>

          <h5 class="termsTitle"><strong>{{ $t('terms.section4.title') }}</strong></h5>
          <p>{{ $t('terms.section4.desc') }}</p>
          <p v-html="$t('terms.section4.desc2')"></p>
          <p v-html="$t('terms.section4.desc3')"></p>
          <p v-html="$t('terms.section4.desc4')"></p>
          <p v-html="$t('terms.section4.desc5')"></p>
          <p v-html="$t('terms.section4.desc6')"></p>
          <p v-html="$t('terms.section4.desc7')"></p>
          <p v-html="$t('terms.section4.desc8')"></p>
          <p v-html="$t('terms.section4.desc9')"></p>

          <h5 class="termsTitle"><strong>{{ $t('terms.section5.title') }}</strong></h5>
          <p>{{ $t('terms.section5.desc') }}</p>
          <p v-html="$t('terms.section5.desc2')"></p>
          <p v-html="$t('terms.section5.desc3')"></p>
          <p v-html="$t('terms.section5.desc4')"></p>
          <p v-html="$t('terms.section5.desc5')"></p>

          <h5 class="termsTitle"><strong>{{ $t('terms.section6.title') }}</strong></h5>
          <p>{{ $t('terms.section6.desc') }}</p>
          <p v-html="$t('terms.section6.desc2')"></p>
          <p v-html="$t('terms.section6.desc3')"></p>
          <p v-html="$t('terms.section6.desc4')"></p>
          <p v-html="$t('terms.section6.desc5')"></p>
          <p v-html="$t('terms.section6.desc6')"></p>
          <p v-html="$t('terms.section6.desc7')"></p>
          <p v-html="$t('terms.section6.desc8')"></p>

          <h5 class="termsTitle"><strong>{{ $t('terms.section7.title') }}</strong></h5>
          <p>{{ $t('terms.section7.desc') }}</p>
          <p v-html="$t('terms.section7.desc2')"></p>
          <p v-html="$t('terms.section7.desc3')"></p>
          <p v-html="$t('terms.section7.desc4')"></p>
          <p v-html="$t('terms.section7.desc5')"></p>
          <p v-html="$t('terms.section7.desc6')"></p>
          <p v-html="$t('terms.section7.desc7')"></p>

          <h5 class="termsTitle"><strong>{{ $t('terms.section8.title') }}</strong></h5>
          <p>{{ $t('terms.section8.desc') }}</p>
          <p v-html="$t('terms.section8.desc2')"></p>
          <p v-html="$t('terms.section8.desc3')"></p>
          <p v-html="$t('terms.section8.desc4')"></p>
          <p v-html="$t('terms.section8.desc5')"></p>

          <h5 class="termsTitle"><strong>{{ $t('terms.section9.title') }}</strong></h5>
          <p>{{ $t('terms.section9.desc') }}</p>

          <h5 class="termsTitle"><strong>{{ $t('terms.section10.title') }}</strong></h5>
          <p>{{ $t('terms.section10.desc') }}</p>
          <p v-html="$t('terms.section10.desc2')"></p>
          <p v-html="$t('terms.section10.desc3')"></p>
          <p v-html="$t('terms.section10.desc4')"></p>
          <p v-html="$t('terms.section10.desc5')"></p>
          <p v-html="$t('terms.section10.desc6')"></p>
          
        </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style>

.terms_content{
  text-align: justify;
  max-width: 1100px;
  margin: 50px auto;
  font-family: "Roboto", Sans-serif;
}
.terms_content p{
  font-size: 16px;
}

.termsTitle{
  margin-top: 50px;
}

</style>