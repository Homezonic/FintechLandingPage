<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Privacy Policy" />
            <PrivacyPolicy />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy'
import Footer from '../Layouts/Footer'

export default {
    name: 'PrivacyPolicyPage',
    components: {
        Navbar,
        PageTitle,
        PrivacyPolicy,
        Footer,
    }
}
</script>