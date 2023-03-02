<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="About Us" />
            <SmartBanking />
            <OnlineShopping />
            <AppDownload />
            <GoalSettings />
            <BankingSecurity />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import SmartBanking from '../HomeThree/SmartBanking'
import OnlineShopping from '../About/OnlineShopping'
import AppDownload from '../About/AppDownload'
import GoalSettings from '../About/GoalSettings'
import Testimonials from '../About/Testimonials'
import BankingSecurity from '../HomeThree/BankingSecurity'
import Footer from '../Layouts/Footer'

export default {
    name: 'AboutPage',
    components: {
        Navbar,
        PageTitle,
        SmartBanking,
        OnlineShopping,
        AppDownload,
        GoalSettings,
        Testimonials,
        BankingSecurity,
        Footer,
    }
}
</script>