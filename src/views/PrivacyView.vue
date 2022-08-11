<template>
  <main>
    <div>
        <h1 class="mt-5"><strong>{{ $t('privacy.title') }}</strong></h1>
        <div class="privacy_content px-3">
          <p class="date_updated"><i>{{ $t('privacy.dateUpdate') }}</i></p>
          <p style="margin-top:50px;">{{ $t('privacy.intro') }}</p>

          <h5 class="policyTitle"><strong>{{ $t('privacy.section1.title') }}</strong></h5>
          <p>{{ $t('privacy.section1.desc') }}</p>
          <p v-html="$t('privacy.section1.desc2')"></p>
          <p v-html="$t('privacy.section1.desc3')"></p>
          <p v-html="$t('privacy.section1.desc4')"></p>
          <p v-html="$t('privacy.section1.desc5')"></p>
          <p v-html="$t('privacy.section1.desc6')"></p>

          <h5 class="policyTitle"><strong>{{ $t('privacy.section2.title') }}</strong></h5>
          <p v-html="$t('privacy.section2.desc')"></p>

          <h5 class="policyTitle"><strong>{{ $t('privacy.section3.title') }}</strong></h5>
          <p>{{ $t('privacy.section3.desc') }}</p>
          <p v-html="$t('privacy.section3.desc2')"></p>
          <p v-html="$t('privacy.section3.desc3')"></p>
          <p v-html="$t('privacy.section3.desc4')"></p>
          <p v-html="$t('privacy.section3.desc5')"></p>

          <h5 class="policyTitle"><strong>{{ $t('privacy.section4.title') }}</strong></h5>
          <p>{{ $t('privacy.section4.desc') }}</p>
          <p v-html="$t('privacy.section4.desc2')"></p>
          <p v-html="$t('privacy.section4.desc3')"></p>
          <p v-html="$t('privacy.section4.desc4')"></p>
          <p v-html="$t('privacy.section4.desc5')"></p>
          <p v-html="$t('privacy.section4.desc6')"></p>
          <p v-html="$t('privacy.section4.desc7')"></p>
          <p v-html="$t('privacy.section4.desc8')"></p>
          <p v-html="$t('privacy.section4.desc9')"></p>
          <p v-html="$t('privacy.section4.desc10')"></p>
          <p v-html="$t('privacy.section4.desc11')"></p>
          <p v-html="$t('privacy.section4.desc12')"></p>
          <p v-html="$t('privacy.section4.desc13')"></p>
          <p v-html="$t('privacy.section4.desc14')"></p>
          <p v-html="$t('privacy.section4.desc15')"></p>

          <h5 class="policyTitle"><strong>{{ $t('privacy.section5.title') }}</strong></h5>
          <p>{{ $t('privacy.section5.desc') }}</p>
          <p v-html="$t('privacy.section5.desc2')"></p>
          <p v-html="$t('privacy.section5.desc3')"></p>
          <p v-html="$t('privacy.section5.desc4')"></p>
          <p v-html="$t('privacy.section5.desc5')"></p>

          <h5 class="policyTitle"><strong>{{ $t('privacy.section6.title') }}</strong></h5>
          <p>{{ $t('privacy.section6.desc') }}</p>
          <p v-html="$t('privacy.section6.desc2')"></p>
          <p v-html="$t('privacy.section6.desc3')"></p>
          <p v-html="$t('privacy.section6.desc4')"></p>
          <p v-html="$t('privacy.section6.desc5')"></p>
          <p v-html="$t('privacy.section6.desc6')"></p>
          <p v-html="$t('privacy.section6.desc7')"></p>
          <p v-html="$t('privacy.section6.desc8')"></p>
          <p v-html="$t('privacy.section6.desc9')"></p>
          <p v-html="$t('privacy.section6.desc10')"></p>
          <p v-html="$t('privacy.section6.desc11')"></p>
          <p v-html="$t('privacy.section6.desc12')"></p>

          <h5 class="policyTitle"><strong>{{ $t('privacy.section7.title') }}</strong></h5>
          <p>{{ $t('privacy.section7.desc') }}</p>
          <p v-html="$t('privacy.section7.desc2')"></p>
          <p v-html="$t('privacy.section7.desc3')"></p>

          <h5 class="policyTitle"><strong>{{ $t('privacy.section8.title') }}</strong></h5>
          <p>{{ $t('privacy.section8.desc') }}</p>
          
          <h5 class="policyTitle"><strong>{{ $t('privacy.section9.title') }}</strong></h5>
          <p>{{ $t('privacy.section9.desc') }}</p>
          <p v-html="$t('privacy.section9.desc2')"></p>
          <p v-html="$t('privacy.section9.desc3')"></p>
          <p v-html="$t('privacy.section9.desc4')"></p>
          <p v-html="$t('privacy.section9.desc5')"></p>
          <p v-html="$t('privacy.section9.desc6')"></p>
          <p v-html="$t('privacy.section9.desc7')"></p>
          <p v-html="$t('privacy.section9.desc8')"></p>

          <h5 class="policyTitle"><strong>{{ $t('privacy.section10.title') }}</strong></h5>
          <p>{{ $t('privacy.section10.desc') }}</p>

          <h5 class="policyTitle"><strong>{{ $t('privacy.section11.title') }}</strong></h5>
          <p>{{ $t('privacy.section11.desc') }}</p>
          
        </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style>

.privacy_content{
  text-align: justify;
  max-width: 1100px;
  margin: 50px auto;
  font-family: "Roboto", Sans-serif;
}
.privacy_content p{
  font-size: 16px;
}

.policyTitle{
  margin-top: 50px;
}

</style>