<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Contact Us" />
            <Contact />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import Contact from '../Contact/Contact'
import Footer from '../Layouts/Footer'

export default {
    name: 'ContactUsPage',
    components: {
        Navbar,
        PageTitle,
        Contact,
        Footer,
    }
}
</script>