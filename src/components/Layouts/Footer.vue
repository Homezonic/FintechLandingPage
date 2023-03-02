<template>
  <footer class="footer-wrap bg-rock">
    <div class="container">
      <img
        src="../../assets/images/footer-shape-1.png"
        alt="Image"
        class="footer-shape-one"
      />
      <img
        src="../../assets/images/footer-shape-2.png"
        alt="Image"
        class="footer-shape-two"
      />
      <div class="row pt-100 pb-75">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <div class="footer-widget">
            <router-link to="/" class="footer-logo">
              <img src="../../assets/images/logo-white.png" alt="Image" />
            </router-link>
            <p class="comp-desc">
              Connect to more people, send money instantly with wire transfer, 
              and enjoy more benefits at a low cost. 
              Simplify steps and eliminate risks in the financial transactions with Finrae.
            </p>
            <div class="social-link" style="visibility: hidden;">
              <ul class="social-profile list-style style1">
                <li>
                  <a target="_blank" href="https://facebook.com">
                    <i class="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com">
                    <i class="ri-twitter-fill"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://linkedin.com">
                    <i class="ri-linkedin-fill"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://instagram.com">
                    <i class="ri-pinterest-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <div class="footer-widget">
            <h3 class="footer-widget-title">Our Company</h3>
            <ul class="footer-menu list-style">
             
              <li>
                <router-link to="/services">
                  <i class="flaticon-next"></i>
                  Our Services
                </router-link>
              </li>
             
             
              <li>
                <router-link to="/contact">
                  <i class="flaticon-next"></i>
                  Contact Us
                </router-link>
              </li>
              <li>
                <router-link to="/privacy-policy">
                  <i class="flaticon-next"></i>
                  Privacy Policy
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <div class="footer-widget">
            <h3 class="footer-widget-title">Subscribe</h3>
            <p class="newsletter-text">
              Subscribe to our monthly newsletter
            </p>
            <form @submit.prevent class="newsletter-form">
              <input type="email" placeholder="Your Email" />
              <button type="button">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-text">
      <p>
        <i class="ri-copyright-line"></i>{{ currentYear }} {{ appname }}. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      appname: "Finrae"
    };
  },
};
</script>
