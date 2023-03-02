<template>
    <div class="cta-wrap style1 ptb-100 ">
        <div class="container">
            <img src="../../assets/images/cta-shape-1.png" alt="Image" class="cta-shape-one xs-none">
            <img src="../../assets/images/cta-shape-2.png" alt="Image" class="cta-shape-two xs-none">
            <div class="row">
                <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                    <div class="content-title style1 text-center mb-40">
                        <span>Contact Us</span>
                        <h2>Finrae Is A Quick Solution For Business Payments</h2>
                    </div>
                    <div class="cta-btn">
                        <router-link to="/app/login" class="btn style1">Personal Account</router-link>
                        <router-link to="/app/login" class="btn style3">Business Account</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactUs'
}
</script>