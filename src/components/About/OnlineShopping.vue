<template>
    <div class="shopping-wrap ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-12 order-lg-1 order-2">
                    <div class="shopping-content">
                        <img src="../../assets/images/shopping/shopping-shape-1.png" alt="Image" class="shopping-shape-one moveHorizontal">
                        <img src="../../assets/images/shopping/shopping-shape-2.png" alt="Image" class="shopping-shape-two bounce">
                        <div class="content-title style1 ">
                            <span>Online Shopping</span>
                            <h2>Use Finrae card to shop online</h2>
                            <p>Finrae virtual card can be used to shop online, anywhere and at anytime with no boundaries.</p>
                        </div>
                        <ul class="content-feature-list list-style">
                            <li><i class="ri-check-double-line"></i>Cards that work all across the world.</li>
                            <li><i class="ri-check-double-line"></i>Zero maintenance fee.</li>
                            <li><i class="ri-check-double-line"></i>No minimum balance. No overdrafts.</li>
                        </ul>
                        <router-link to="app/" class="btn style1">Signup Today</router-link>
                    </div>
                </div>
                <div class="col-lg-6 col-12 order-lg-2 order-1">
                    <div class="shopping-img-wrap">
                        <img src="../../assets/images/shopping/shopping-1.png" alt="Image">
                        <img src="../../assets/images/shopping/shopping-shape-3.png" alt="Image" class="shopping-shape-three">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OnlineShopping'
}
</script>