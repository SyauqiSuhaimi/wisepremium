<template>
<div class="" style="background-color:black; padding:10px;">
  <a class="navbar-brand" href="#"><img src="../assets/wpLogo1.png" width="100" alt=""></a>
</div>

  <nav class="navbar navbar-expand-lg navbar-dark">
    
  <div class="container-fluid navbarContainer">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item mx-2">
          <a class="nav-link active" aria-current="page" href="/">{{ $t('footer.links.memberships') }}</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link active" href="/concierge">{{ $t('footer.links.concierge') }}</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link active" href="/valueProg">{{ $t('footer.links.valueProg') }}</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link active" href="#">{{ $t('footer.links.contactUs') }}</a>
        </li>
        <!-- <li class="nav-item mx-2">
          <select v-model="$i18n.locale">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
              {{ lang }}
            </option>
          </select>
        </li> -->
        <li class="nav-item mx-2 dropdown">
          <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            EN/CN
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" @click.prevent="setLocale('en')">English</a></li>
            <li><a class="dropdown-item" @click.prevent="setLocale('zh')">Chinese</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data () {
    return { langs: ['en', 'zh'] }
  },

  methods:{

    setLocale(locale){
      this.$i18n.locale = locale
    }
  }

}
</script>

<style>

.navbar{
  background-color: black !important;
  color: white;
  font-size: 18px;
}

.navbarContainer{
    max-width: 1100px;
}

.nav-link :hover{
    color: black !important;
}

.nav-link .active{
    color: #F4DCBC !important;
}

</style>