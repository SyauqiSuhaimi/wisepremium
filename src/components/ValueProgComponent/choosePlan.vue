<template>
  <div  class="content_section">
    <h4>{{ $t('valueProg.choosePlan.title') }}</h4>
    <p>{{ $t('valueProg.choosePlan.desc') }}</p>
    <!-- <a href="/contactUs" class="button-34">{{ $t('valueProg.choosePlan.button') }}</a> -->
    <router-link :to="`/${$i18n.locale}/contactUs`" class="button-34">{{ $t('valueProg.choosePlan.button') }}</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.choosePlan_section .content_section
{
    background-color: #F1F1F1;
    padding: 100px 20px;
}

@media (max-width: 575.98px){
  
.choosePlan_section .content_section
{
    background-color: #F1F1F1;
    padding: 50px 20px;
}
}

</style>