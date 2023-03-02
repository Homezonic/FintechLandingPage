<template>
    <div class="breadcrumb-wrap bg-spring">
        <img src="../../assets/images/breadcrumb/br-shape-1.png" alt="Image" class="br-shape-one xs-none">
        <img src="../../assets/images/breadcrumb/br-shape-2.png" alt="Image" class="br-shape-two xs-none">
        <img src="../../assets/images/breadcrumb/br-shape-3.png" alt="Image" class="br-shape-three moveHorizontal sm-none">
        <img src="../../assets/images/breadcrumb/br-shape-4.png" alt="Image" class="br-shape-four moveVertical sm-none">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-8 col-sm-8">
                    <div class="breadcrumb-title">
                        <h2>{{pageTitle}}</h2>
                        <ul class="breadcrumb-menu list-style">
                            <li><router-link to="/">Home </router-link></li>
                            <li>{{pageTitle}}</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-5 col-md-4 col-sm-4 xs-none">
                    <div class="breadcrumb-img">
                        <img src="../../assets/images/breadcrumb/br-shape-5.png" alt="Image" class="br-shape-five animationFramesTwo">
                        <img src="../../assets/images/breadcrumb/br-shape-6.png" alt="Image" class="br-shape-six bounce">
                        <img src="../../assets/images/breadcrumb/breadcrumb-1.png" alt="Image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: ['pageTitle']
}
</script>