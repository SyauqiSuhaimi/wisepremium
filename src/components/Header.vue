<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid navbarContainer">
    <a class="navbar-brand" href="#"><img src="../assets/wpLogo.png" width="250" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">{{ $t('footer.links.memberships') }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{{ $t('footer.links.concierge') }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{{ $t('footer.links.contactUs') }}</a>
        </li>
        <!-- <li class="nav-item">
          <select v-model="$i18n.locale">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
              {{ lang }}
            </option>
          </select>
        </li> -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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