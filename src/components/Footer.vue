<template>
<section>
    <div class="bg_section pt-4">
        <div class="content_section">
            <div class="row">
                <div class="col">
                    <img src="../assets/wpLogo.png" width="200" alt="">
                </div>
            </div>
            <div class="row link_section">
                <div class="col">
                    <a href="/" class="footerLink">{{ $t('footer.links.memberships') }}</a>
                </div>
                <div class="col">
                    <a href="/concierge" class="footerLink">{{ $t('footer.links.concierge') }}</a>
                </div>
                <div class="col">
                    <a href="#" class="footerLink">{{ $t('footer.links.valueProg') }}</a>
                </div>
                <div class="col">
                    <a href="#" class="footerLink">{{ $t('footer.links.faq') }}</a>
                </div>
                <div class="col">
                    <a href="#" class="footerLink">{{ $t('footer.links.contactUs') }}</a>
                </div>
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
            <div class="row">
                <div class="col-lg-6 text-start">
                    {{ $t('footer.privacyPolicy') }} | {{ $t('footer.termsCondition') }}
                </div>
                <div class="col-lg-6 text-end">
                    <p>{{ $t('footer.copyright') }}</p>
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
    background-color: var(--bgcolor);
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

.footerLink:hover {
    color: white;
}

</style>