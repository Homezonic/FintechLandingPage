<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <MainBanner />
        <SmartBanking />
        <Feature />
        <BankingSecurity />
        <AppDownload />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import MainBanner from '../HomeThree/MainBanner'
import SmartBanking from '../HomeThree/SmartBanking'
import Feature from '../HomeThree/Feature'
import BankingSecurity from '../HomeThree/BankingSecurity'
import AppDownload from '../HomeThree/AppDownload'
import Footer from '../Layouts/Footer'

export default {
    name: 'HomeThreePage',
    components: {
        Navbar,
        MainBanner,
        SmartBanking,
        Feature,
        BankingSecurity,
        AppDownload,
        Footer,
    }
}
</script>