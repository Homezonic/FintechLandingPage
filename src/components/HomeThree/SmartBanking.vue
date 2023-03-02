<template>
    <div class="about-wrap style1 ptb-100">
        <div class="container">
            <div class="row gx-5 align-items-center">
                <div class="col-lg-6">
                    <div class="about-img-wrap">
                        <img src="../../assets/images/about/about-shape-1.png" alt="Image" class="about-shape-one bounce">
                        <img src="../../assets/images/about/about-shape-2.png" alt="Image" class="about-shape-two moveHorizontal">
                        <img src="../../assets/images/about/about-img-1.png" alt="Image" class="about-img">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-content">
                        <img src="../../assets/images/about/about-shape-3.png" alt="Image" class="about-shape-three">
                        <div class="content-title style1">
                            <span>Smart &amp; Secure Banking</span>
                            <h2>Your security is our priority</h2>
                            <p>We protect your assets and information with multiple security features:</p>
                        </div>
                        <ul class="content-feature-list style1 list-style">
                            <li><span><i class="flaticon-tick"></i></span>Best-in-class firewall and email strengthening programming.</li>
                            <li><span><i class="flaticon-tick"></i></span>Industry leading security software.</li>
                            <li><span><i class="flaticon-tick"></i></span>Our <b>Digital Banking Guarantee</b> ensures you’ll never pay for unauthorized transactions.</li>
                        </ul>
                        <router-link to="/about" class="btn style1">More About us</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SmartBanking'
}
</script>