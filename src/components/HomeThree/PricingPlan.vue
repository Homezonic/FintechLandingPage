<template>
    <div class="pricing-table-wrap pt-100 pb-75">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                    <div class="section-title style1 text-center mb-40">
                        <span>Our Pricing Plan</span>
                        <h2>We Charge As Little As Possible</h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="pricing-table style1">
                        <div class="pricing-header">
                            <h2><img src="../../assets/images/pricing-star.png" alt="Image">Basic</h2>
                            <div class="pricing-header-tag">
                                <h3>$69<span>Per Month</span></h3>
                            </div>
                        </div>
                        <div class="pricing-features">
                            <ul class="list-style">
                                <li class="checked"><i class="ri-check-line"></i>Free Mobile &amp; Online App</li>
                                <li class="checked"><i class="ri-check-line"></i>Online System</li>
                                <li class="checked"><i class="ri-check-line"></i>Data Full Access</li>
                                <li class="unchecked"><i class="ri-close-line"></i>1 Business Mastercard </li>
                                <li class="unchecked"><i class="ri-close-line"></i>24/7 Support</li>
                            </ul>
                        </div>

                        <div class="purchase-pricing">
                            <router-link to="/login" class="btn style1">Choose Plan</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="pricing-table style2">
                        <div class="pricing-header">
                            <h2><img src="../../assets/images/pricing-star.png" alt="Image">Standard</h2>
                            <div class="pricing-header-tag">
                                <h3>$79<span>Per Month</span></h3>
                            </div>
                            <span class="feature-tag">Most Popular</span>
                        </div>
                        <div class="pricing-features">
                            <ul class="list-style">
                                <li class="checked"><i class="ri-check-line"></i>Free Mobile &amp; Online App</li>
                                <li class="checked"><i class="ri-check-line"></i>Online System</li>
                                <li class="checked"><i class="ri-check-line"></i>Data Full Access</li>
                                <li class="checked"><i class="ri-check-line"></i>1 Business Mastercard </li>
                                <li class="unchecked"><i class="ri-close-line"></i>24/7 Support</li>
                            </ul>
                        </div>

                        <div class="purchase-pricing">
                            <router-link to="/login" class="btn style1">Choose Plan</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="pricing-table style1">
                        <div class="pricing-header">
                            <h2><img src="../../assets/images/pricing-star.png" alt="Image">Premium</h2>
                            <div class="pricing-header-tag">
                                <h3>$89<span>Per Month</span></h3>
                            </div>
                        </div>
                        <div class="pricing-features">
                            <ul class="list-style">
                                <li class="checked"><i class="ri-check-line"></i>Free Mobile &amp; Online App</li>
                                <li class="checked"><i class="ri-check-line"></i>Online System</li>
                                <li class="checked"><i class="ri-check-line"></i>Data Full Access</li>
                                <li class="checked"><i class="ri-check-line"></i>1 Business Mastercard </li>
                                <li class="unchecked"><i class="ri-close-line"></i>24/7 Support</li>
                            </ul>
                        </div>

                        <div class="purchase-pricing">
                            <router-link to="/login" class="btn style1">Choose Plan</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PricingPlan'
}
</script>