<template>
    <div class="error-wrapper">
        <div class="error-wrap">
            <div class="error">
                <div class="container">
                    <div class="error-content">
                        <img src="../../assets/images/404.png" alt="Iamge">
                        <h2>Oops! Page Not Found</h2>
                        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                        <router-link to="/" class="btn style2">Back To Home</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ErrorPage'
}
</script>