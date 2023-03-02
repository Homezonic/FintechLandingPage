<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Frequently Asked Questions" />
            <Faq />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import Faq from '../Faq/Faq'
import Footer from '../Layouts/Footer'

export default {
    name: 'FaqPage',
    components: {
        Navbar,
        PageTitle,
        Faq,
        Footer,
    }
}
</script>