import { createWebHistory, createRouter } from "vue-router";

import HomeThreePage from "../components/Pages/HomeThreePage";
import AboutPage from "../components/Pages/AboutPage";
import ServicesPage from "../components/Pages/ServicesPage";
import FaqPage from "../components/Pages/FaqPage";
import TermsOfServicePage from "../components/Pages/TermsOfServicePage";
import PrivacyPolicyPage from "../components/Pages/PrivacyPolicyPage";
import ErrorPage from "../components/Pages/ErrorPage";
import ContactUsPage from "../components/Pages/ContactUsPage";

const routes = [
  { path: "/", name: "HomeOnePage", component: HomeThreePage },
  { path: "/about", name: "AboutPage", component: AboutPage },
  { path: "/services", name: "ServicesPage", component: ServicesPage },
  { path: "/faq", name: "FaqPage", component: FaqPage },
  { path: "/terms-of-service", name: "TermsOfServicePage", component: TermsOfServicePage },
  { path: "/privacy-policy", name: "PrivacyPolicyPage", component: PrivacyPolicyPage },
  { path: "/:pathMatch(.*)*", name: "ErrorPage", component: ErrorPage },
  { path: "/contact", name: "ContactUsPage", component: ContactUsPage },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
