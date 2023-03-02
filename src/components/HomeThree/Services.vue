<template>
  <div class="service-wrap style1 pt-100 pb-75">
    <div class="container">
      <div class="row gx-5 align-items-center">
        <div class="col-xl-6 col-lg-12 service-card-wrap">
          <div class="row">
            <div class="col-md-6 mmt-45">
              <div class="service-card style1">
                <span class="service-icon">
                  <img
                    src="../../assets/images/service/service-icon-1.png"
                    alt="Image"
                  />
                </span>
                <h3>
                  <router-link to="/service-details"
                    >Deadline Reminders</router-link
                  >
                </h3>
                <p>
                  Lorem ipsum dolor sit ametus situlo consec tetur adicingus
                  elittque coris sapite illo sit.
                </p>
              </div>
              <div class="service-card style1">
                <span class="service-icon">
                  <img
                    src="../../assets/images/service/service-icon-2.png"
                    alt="Image"
                  />
                </span>
                <h3>
                  <router-link to="/service-details"
                    >Drag Functionality</router-link
                  >
                </h3>
                <p>
                  Lorem ipsum dolor sit ametus situlo consec tetur adicingus
                  elittque coris sapite illo sit.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="service-card style1">
                <span class="service-icon">
                  <img
                    src="../../assets/images/service/service-icon-3.png"
                    alt="Image"
                  />
                </span>
                <h3>
                  <router-link to="/service-details"
                    >Simple Dashboard</router-link
                  >
                </h3>
                <p>
                  Lorem ipsum dolor sit ametus situlo consec tetur adicingus
                  elittque coris sapite illo sit.
                </p>
              </div>
              <div class="service-card style1">
                <span class="service-icon">
                  <img
                    src="../../assets/images/service/service-icon-4.png"
                    alt="Image"
                  />
                </span>
                <h3>
                  <router-link to="/service-details"
                    >Email Notification</router-link
                  >
                </h3>
                <p>
                  Lorem ipsum dolor sit ametus situlo consec tetur adicingus
                  elittque coris sapite illo sit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-12">
          <div class="service-content">
            <div class="content-title style1">
              <span>Our Services</span>
              <h2>Providing Services For Last 25 Years With Reputation</h2>
              <p>
                There are many variations of passages of Lorem Ipsum amet
                avoilble but majority have suffered alteration in some form, by
                injected humur or randomise words which don't sure amet sit
                dolor quras alto lorem.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias id illum nam eligendi ut porro iusto sunt, cupiditate
                repudiandae ipsam.
              </p>
            </div>
            <router-link to="/services" class="btn style1"
              >View All Services</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
};
</script>
