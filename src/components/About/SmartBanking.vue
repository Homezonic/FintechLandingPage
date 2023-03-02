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
                            <span>Smart Banking</span>
                            <h2>The Better Way To Save &amp; Invest Online Banking</h2>
                            <p>There are many variations of passages of Lorem Ipsum amet avoilble but majority have suffered alteration in some form, by injected humur or randomise words which don't sure amet sit dolor quras alto lorem.</p>
                        </div>
                        <ul class="content-feature-list style1 list-style">
                            <li><span><i class="flaticon-tick"></i></span>Cards that work all across the world.</li>
                            <li><span><i class="flaticon-tick"></i></span>Highest Returns on your investments.</li>
                            <li><span><i class="flaticon-tick"></i></span>No ATM fees. No minimum balance. No overdrafts.</li>
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