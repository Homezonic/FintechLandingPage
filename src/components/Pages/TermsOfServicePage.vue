<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Terms Of Service" />
            <TermsOfService />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import TermsOfService from '../TermsOfService/TermsOfService'
import Footer from '../Layouts/Footer'

export default {
    name: 'TermsOfServicePage',
    components: {
        Navbar,
        PageTitle,
        TermsOfService,
        Footer,
    }
}
</script>