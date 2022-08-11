<template>
<section>
    <div class="bg_section pt-4 pb-2">
        <div class="content_section">
            <div class="row mx-0">
                <div class="col">
                    <img src="../assets/wpLogo.png" width="200" alt="">
                </div>
            </div>
            <div class="row link_section px-1">
                <div class="col-4 col-lg px-0 d-flex align-items-center justify-content-center">
                    <!-- <a href="/" class="footerLink"><p>{{ $t('footer.links.memberships') }}</p></a> -->
                    <router-link :to="`/${$i18n.locale}/home`" class="footerLink"><p>{{ $t('footer.links.memberships') }}</p></router-link>
                </div>
                <div class="col-4 col-lg px-0 d-flex align-items-center justify-content-center">
                    <!-- <a href="/concierge" class="footerLink"><p>{{ $t('footer.links.concierge') }}</p></a> -->
                    <router-link :to="`/${$i18n.locale}/concierge`" class="footerLink"><p>{{ $t('footer.links.concierge') }}</p></router-link>
                </div>
                <div class="col-4 col-lg px-0 d-flex align-items-center justify-content-center">
                    <!-- <a href="/valueProg" class="footerLink"><p>{{ $t('footer.links.valueProg') }}</p></a> -->
                    <router-link :to="`/${$i18n.locale}/valueProg`" class="footerLink"><p>{{ $t('footer.links.valueProg') }}</p></router-link>
                </div>
                <div class="col-3 d-lg-none"></div>
                <div class="col px-0 d-flex align-items-center justify-content-center">
                    <!-- <a href="/FAQ" class="footerLink"><p>{{ $t('footer.links.faq') }}</p></a> -->
                    <router-link :to="`/${$i18n.locale}/FAQ`" class="footerLink"><p>{{ $t('footer.links.faq') }}</p></router-link>
                </div>
                <div class="col px-0 d-flex align-items-center justify-content-center">
                    <!-- <a href="/contactUs" class="footerLink"><p>{{ $t('footer.links.contactUs') }}</p></a> -->
                    <router-link :to="`/${$i18n.locale}/contactUs`" class="footerLink"><p>{{ $t('footer.links.contactUs') }}</p></router-link>
                </div>
                <div class="col-3 d-lg-none"></div>
            </div>
            <div class="row icon_section">
                <div class="col">
                    <img src="../assets/homeAssets/facebookLogo.png" width="" alt="">
                </div>
                <div class="col">
                    <img src="../assets/homeAssets/instaLogo.png" width="" alt="">
                </div>
                <div class="col">
                   <img src="../assets/homeAssets/twitterLogo.png" width="" alt="">
                </div>
                <div class="col">
                    <img src="../assets/homeAssets/youtubeLogo.png" width="" alt="">
                </div>
            </div>
            <div class="row mx-0">
                <div class="col-12 col-lg-6 text-lg-start mt-4 mt-lg-0">
                    <a href="/en/privacy-policy" class="footerLink2">{{ $t('footer.privacyPolicy') }}</a> | <a href="/en/terms-condition" class="footerLink2">{{ $t('footer.termsCondition') }}</a>
                </div>
                <div class="col-12 col-lg-6 text-lg-end mt-2 mt-lg-0 copyRight">
                    {{ $t('footer.copyright') }}
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

.footer_section .bg_section{
    background-color: #212121;
    color: white;
}

.footer_section .content_section{
    margin: 0 auto !important;
}
.footer_section .link_section{
    margin: 30px auto;
    max-width: 800px;
}
.footer_section .icon_section{
    margin: 0 auto;
    max-width: 400px;
}

.footerLink {
    color: var(--primecolor);
    text-decoration: none;
}

.footerLink:hover, .footerLink2:hover {
    color: white;
}

.footerLink2 {
    color: white;
    text-decoration: none;
}





@media (max-width: 575.98px){
  
.footer_section .link_section{
    margin: 20px auto;
}

.footerLink , .footerLink2, .copyRight{
    font-size: 14px;
}

}

</style>