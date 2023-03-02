<template>
    <div class="service-wrap bg-albastor pt-100 pb-75">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                    <div class="section-title style1 text-center mb-40">
                        <span>Our Services</span>
                        <h2>Providing Services For Last 25 Years With Reputation</h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                    <div class="service-card style1">
                        <span class="service-icon">
                        <img src="../../assets/images/service/service-icon-1.png" alt="Image">
                        </span>
                        <h3><router-link to="/service-details">Deadline Reminders</router-link></h3>
                        <p>Lorem ipsum dolor sit ametus situlo consec tetur adicingus elittque coris sapite illo sit.</p>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                    <div class="service-card style1">
                        <span class="service-icon">
                            <img src="../../assets/images/service/service-icon-2.png" alt="Image">
                        </span>
                        <h3><router-link to="/service-details">Drag Functionality</router-link></h3>
                        <p>Lorem ipsum dolor sit ametus situlo consec tetur adicingus elittque coris sapite illo sit.</p>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                    <div class="service-card style1">
                        <span class="service-icon">
                            <img src="../../assets/images/service/service-icon-3.png" alt="Image">
                        </span>
                        <h3><router-link to="/service-details">Simple Dashboard</router-link></h3>
                        <p>Lorem ipsum dolor sit ametus situlo consec tetur adicingus elittque coris sapite illo sit.</p>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                    <div class="service-card style1">
                        <span class="service-icon">
                            <img src="../../assets/images/service/service-icon-4.png" alt="Image">
                        </span>
                        <h3><router-link to="/service-details">Email Notification</router-link></h3>
                        <p>Lorem ipsum dolor sit ametus situlo consec tetur adicingus elittque coris sapite illo sit.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Services'
}
</script>