<template>
  <div :class="['header-wrap', { sticky: isSticky }]">
    <!-- Top Header -->
    <div class="header-top" :class="{ open: open }">
      <button type="button" class="close-sidebar" @click="open = !open">
        <i class="ri-close-fill"></i>
      </button>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 col-md-9">
            <div class="header-top-left">
              <ul class="contact-info list-style">
                <li>
                  <i class="flaticon-call"></i>
                  <a href="tel:02459271449">(+024) 592 71 449</a>
                </li>
                <li>
                  <i class="flaticon-email-1"></i>
                  <a href="mailto:hello@finrae.com">hello@finrae.com</a>
                </li>
                <li>
                  <i class="flaticon-pin"></i>
                  <p>St. Here Mandalay, New York, U.K</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4 col-md-3">
            <div class="header-top-right">
              <ul class="header-top-menu list-style">
                <li><router-link to="/contact">Support</router-link></li>
                <!-- <li><router-link to="/contact">Help</router-link></li> -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Top Header -->

    <!-- Navbar -->
    <div class="header-bottom">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light">
          <router-link class="navbar-brand" to="/">
            <img
              class="logo-light"
              src="../../assets/images/logo.png"
              alt="logo"
            />
            <img
              class="logo-dark"
              src="../../assets/images/logo-white.png"
              alt="logo"
            />
          </router-link>

          <div class="collapse navbar-collapse" :class="{ show: active }">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a href="/" class="nav-link"> Home </a>
              </li>

              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>

              <li class="nav-item has-dropdown">
                <a href="/services" class="nav-link"> Services</a>
              </li>

              <li class="nav-item has-dropdown">
                <a href="/faq" class="nav-link"> Faq</a>
              </li>

              <li class="nav-item has-dropdown">
                <a href="#" class="nav-link">Pages  <i class="ri-arrow-down-s-line"></i></a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <router-link to="/terms-of-service" class="nav-link">Terms of Service</router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/privacy-policy" class="nav-link">Privacy Policy</router-link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <router-link to="/contact" class="nav-link">Contact</router-link>
              </li>
            </ul>
              &nbsp; &nbsp;
            <div class="others-options d-flex align-items-cente">
              <div class="header-btn">
                <router-link to="/app/index" class="btn style1"
                  >Get Started</router-link
                >
              </div>
            </div>
          </div>

          <div class="mobile-bar-wrap">
            <!-- <div
              class="mobile-sidebar"
              @click="open = !open"
              :aria-pressed="open ? 'true' : 'false'"
              v-bind:class="{ open: button_open_state }"
              v-on:click="button_open_state = !button_open_state"
            >
              <i class="ri-menu-4-line"></i>
            </div> -->
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div
              class="navbar-toggler mobile-menu xl-none"
              @click="active = !active"
              :aria-pressed="active ? 'true' : 'false'"
              v-bind:class="{ active: button_active_state }"
              v-on:click="button_active_state = !button_active_state"
            >
              <a href="javascript:void(0);">
                <i class="ri-menu-line"></i>
                <i class="ri-close-line"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
     
    </div>
    <!-- End Navbar -->
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    isSticky: false,
    active: false,
    button_active_state: false,
    search: false,
    button_search_state: false,
    open: false,
    button_open_state: false,
  }),
  mounted() {
    const that = this;
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 100) {
        that.isSticky = true;
      } else {
        that.isSticky = false;
      }
    });
  },
};
</script>
