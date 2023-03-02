<template>
    <div class="security-wrap ptb-100">
        <div class="container">
            <div class="row gx-5 align-items-center">
                <div class="col-lg-6 col-12 order-lg-1 order-2">
                    <div class="security-content">
                        <div class="content-title style1">
                            <span>Banking you can trust</span>
                            <h2>We designed our features with you in mind</h2>
                            <p>Managing your money doesn’t need to be complicated. Simplify your banking with {{ appname }}, an all-in-one money management tool.</p>
                        </div>
                        <div class="feature-item-wrap">
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <img src="../../assets/images/security/security-icon-2.png" alt="Image">
                                </div>
                                <div class="feature-text">
                                    <h3>Schedule payments in advance</h3>
                                    <p>so you never miss a due date.</p>
                                </div>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <img src="../../assets/images/security/security-icon-2.png" alt="Image">
                                </div>
                                <div class="feature-text">
                                    <h3>Connect your accounts in one secure location</h3>
                                    <p>even if they’re not with us.</p>
                                </div>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <img src="../../assets/images/security/security-icon-2.png" alt="Image">
                                </div>
                                <div class="feature-text">
                                    <h3>Transfer money to and from external accounts</h3>
                                    <p>for free with External Transfers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-12 order-lg-2 order-1">
                    <div class="security-img-wrap">
                        <img src="../../assets/images/security/security-shape-1.png" alt="Image" class="security-shape-one">
                        <img src="../../assets/images/security/security-shape-2.png" alt="Image" class="security-shape-two">
                        <img src="../../assets/images/security/security-1.png" alt="Image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BankingSecurity',
    data(){
        return{
            appname: "Finrae"
        };
    }
}
</script>