<template>
<section>
  <div class="content_section">
    <h1>{{ $t('cards.title') }}</h1>
    <p class="cardTitle">{{ $t('cards.desc') }}</p>

    <div class="row">
        <div class="col-lg-4 border">
            <div class="col-12"><img src="../../assets/homeAssets/Silver-card.png" width="320" alt=""></div>
            <div class="col-12"><h4>{{ $t('cards.cardDetails1.title') }}</h4></div>
            <div class="col-12"><p>{{ $t('cards.cardDetails1.registrationFee') }}</p></div>
            <div class="col-12"><p>{{ $t('cards.cardDetails1.monthlySub') }}</p></div>
            <div class="col-12 text-start" style="padding: 0 30px;">
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
        </div>
        <div class="col-lg-4 border">
            <div class="col-12"><img src="../../assets/homeAssets/Black-Card.png" width="320" alt=""></div>
            <div class="col-12"><h4>{{ $t('cards.cardDetails2.title') }}</h4></div>
            <div class="col-12"><p>{{ $t('cards.cardDetails2.registrationFee') }}</p></div>
            <div class="col-12"><p>{{ $t('cards.cardDetails1.monthlySub') }}</p></div>
            <div class="col-12 text-start">
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
        </div>
        <div class="col-lg-4 border">
            <div class="col-12"><img src="../../assets/homeAssets/Gold-card.png" width="320" alt=""></div>
            <div class="col-12"><h4>{{ $t('cards.cardDetails3.title') }}</h4></div>
            <div class="col-12"><p>{{ $t('cards.cardDetails3.registrationFee') }}</p></div>
            <div class="col-12"><p>{{ $t('cards.cardDetails3.monthlySub') }}</p></div>
            <div class="col-12 text-start">
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

</style>