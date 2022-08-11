<template>
<section>
  <div class="content_section">
    <h1>{{ $t('cards.title') }}</h1>
    <p class="cardTitle">{{ $t('cards.desc') }}</p>

    <div class="row">
        <div class="col-lg-4 cardContainer py-3 pyb-5">
            <div class="col-12"><img src="../../assets/homeAssets/Silver-card.png" width="320" alt=""></div>
            <div class="col-12 cardTitle"><h4>{{ $t('cards.cardDetails1.title') }}</h4></div>
            <div class="col-12"><strong><p>{{ $t('cards.cardDetails1.registrationFee') }}</p></strong></div>
            <div class="col-12"><p>{{ $t('cards.cardDetails1.monthlySub') }}</p></div>
            <div class="col-12 text-start cardDesc">
                <hr class="cardLine">
                <ul>
                    <li><p>{{ $t('cards.cardFtr1') }}</p></li>
                    <li><p>{{ $t('cards.cardDetails1.accountLimit') }}</p></li>
                    <li><p>{{ $t('cards.cardFtr2') }}</p></li>
                    <li><p>{{ $t('cards.cardFtr3') }}</p></li>
                    <li><p>{{ $t('cards.cardFtr4') }}</p></li>
                    <li><p>{{ $t('cards.cardFtr5') }}</p></li>
                    <li><p>{{ $t('cards.cardFtr6') }}</p></li>
                    <li><p>{{ $t('cards.cardFtr7') }}</p></li>
                </ul></div>
            <div class="col-12">
                <!-- <a href="/contactUs" class="button-34">{{ $t('cards.button') }}</a> -->
                <router-link :to="`/${$i18n.locale}/contactUs`" class="button-34">{{ $t('cards.button') }}</router-link>
            </div>
        </div>
        <div class="col-lg-4 cardContainer py-3 pyb-5">
            <div class="col-12"><img src="../../assets/homeAssets/Black-Card.png" width="320" alt=""></div>
            <div class="col-12 cardTitle"><h4>{{ $t('cards.cardDetails2.title') }}</h4></div>
            <div class="col-12"><strong><p>{{ $t('cards.cardDetails2.registrationFee') }}</p></strong></div>
            <div class="col-12"><p>{{ $t('cards.cardDetails1.monthlySub') }}</p></div>
            <div class="col-12 text-start cardDesc">
                <hr class="cardLine">
                <ul>
                    <li><p>{{ $t('cards.cardFtr1') }}</p></li>
                    <li><p>{{ $t('cards.cardDetails2.accountLimit') }}</p></li>
                    <li><p>{{ $t('cards.cardFtr2') }}</p></li>
                    <li><p>{{ $t('cards.cardFtr3') }}</p></li>
                    <li><p>{{ $t('cards.cardFtr4') }}</p></li>
                    <li><p>{{ $t('cards.cardFtr5') }}</p></li>
                    <li><p>{{ $t('cards.cardFtr6') }}</p></li>
                    <li><p>{{ $t('cards.cardFtr7') }}</p></li>
                </ul></div>
            <div class="col-12">
                <!-- <a href="/contactUs" class="button-34">{{ $t('cards.button') }}</a> -->
                <router-link :to="`/${$i18n.locale}/contactUs`" class="button-34">{{ $t('cards.button') }}</router-link>
            </div>
        </div>
        <div class="col-lg-4 cardContainer py-3 pyb-5">
            <div class="col-12"><img src="../../assets/homeAssets/Gold-card.png" width="320" alt=""></div>
            <div class="col-12 cardTitle"><h4>{{ $t('cards.cardDetails3.title') }}</h4></div>
            <div class="col-12"><strong><p>{{ $t('cards.cardDetails3.registrationFee') }}</p></strong></div>
            <div class="col-12"><p>{{ $t('cards.cardDetails3.monthlySub') }}</p></div>
            <div class="col-12 text-start cardDesc">
                <hr class="cardLine">
                <ul>
                    <li><p>{{ $t('cards.cardFtr1') }}</p></li>
                    <li><p>{{ $t('cards.cardDetails1.accountLimit') }}</p></li>
                    <li><p>{{ $t('cards.cardFtr2') }}</p></li>
                    <li><p>{{ $t('cards.cardFtr3') }}</p></li>
                    <li><p>{{ $t('cards.cardFtr4') }}</p></li>
                    <li><p>{{ $t('cards.cardFtr5') }}</p></li>
                    <li><p>{{ $t('cards.cardFtr6') }}</p></li>
                    <li><p>{{ $t('cards.cardFtr7') }}</p></li>
                </ul></div>
            <div class="col-12">
                <!-- <a href="/contactUs" class="button-34">{{ $t('cards.button') }}</a> -->
                <router-link :to="`/${$i18n.locale}/contactUs`" class="button-34">{{ $t('cards.button') }}</router-link>
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
.cardTitle{
    color:var(--thirdcolor);
}

.cardDesc{
    padding: 0 30px;
}

.cardContainer:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.cardContainer p{
    opacity: 0.6;
}

.cardLine{
    border: 1px solid;
    color: black;
    opacity: 1;
    /* background-color: black; */
}





</style>