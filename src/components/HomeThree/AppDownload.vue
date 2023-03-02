<template>
    <div class="app-wrap style3 ptb-100">
        <div class="container">
            <div class="row align-items-center gx-5">
                <div class="col-lg-6">
                    <div class="app-img-wrap">
                        <img class="bounce" src="../../assets/images/app/app-1.png" alt="Image">
                        <img class="app-shape-one" src="../../assets/images/app/app-shape-1.png" alt="Image">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="app-content">
                        <div class="content-title style1">
                            <span>Download Our Mobile App</span>
                            <h2>You Can Find All Things You Need In Our App</h2>
                            <p>Download {{ appname }} mobile app and get access to all features and services for all your banking needs. The {{ appname }} mobile app is a convenient, secure, and safe mobile banking application designed for users who are always banking on the go. Getting started with our app lets you access your bank accounts securely from the convenience of your phone.</p>
                        </div>
                        <div class="app-btn">
                            <a target="_blank" href="https://www.apple.com/app-store/"><img src="../../assets/images/apple-store.png" alt="Image"></a>
                            <a target="_blank" href="https://play.google.com/store/apps"><img src="../../assets/images/play-store.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppDownload',
    data() {
        return{
        appname: "Finrae"
        };
    },
}
</script>