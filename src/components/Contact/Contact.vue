<template>
    <div class="contact-wrap pt-100">
        <div class="container">
            <div class="row justify-content-center pb-75">
                <!-- <div class="col-lg-4 col-md-6">
                    <div class="contact-item">
                        <span class="contact-icon">
                            <i class="flaticon-map"></i>
                        </span>
                        <div class="contact-info">
                            <h3>Our Location</h3>
                            <p>2767 Sunrise Street, 10th Avenue, New York, USA
                            </p>
                        </div>
                    </div>
                </div> -->
                <div class="col-lg-6 col-md-6">
                    <div class="contact-item">
                        <span class="contact-icon">
                            <i class="flaticon-email-2"></i>
                        </span>
                        <div class="contact-info">
                            <h3>Email Us</h3>
                            <a href="mailto:hello@ruxa.com">hello@finrae.com</a>
                            <a href="mailto:support@ruxa.com">support@finrae.com</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="contact-item">
                        <span class="contact-icon">
                            <i class="flaticon-phone-call"></i>
                        </span>
                        <div class="contact-info">
                            <h3>Call us</h3>
                            <a href="tel:88098787868">+44 587 154765</a>
                            <a href="tel:88098787869">+1 576 234532</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="comp-map pb-100">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd"></iframe>
            </div> -->
        </div>
        <div class="contact-form-area ptb-100 bg-albastor">
            <img src="../../assets/images/contact-shape-1.png" alt="Image" class="contact-shape-one animationFramesTwo">
            <img src="../../assets/images/contact-shape-2.png" alt="Image" class="contact-shape-two bounce">
            <div class="container">
                <div class="row">
                    <div class="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                        <div class="content-title style1 text-center mb-40">
                            <span>Send Us A Message</span>
                            <h2>Do You have Any Questions?</h2>
                        </div>
                        <div class="contact-form">
                            <form class="form-wrap" @submit.prevent>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="name" placeholder="Your Name*" id="name"
                                                required data-error="Please enter your name">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="email" name="email" id="email" required
                                                placeholder="Your Email*" data-error="Please enter your email*">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="number" name="phone" id="phone" required
                                                placeholder="Phone Number" data-error="Please enter your phone number">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="msg_subject" placeholder="Subject"
                                                id="msg_subject" required data-error="Please enter your subject">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group v1">
                                            <textarea name="message" id="message" placeholder="Your Messages.."
                                                cols="30" rows="10" required
                                                data-error="Please enter your message"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12 text-center">
                                        <button type="submit" class="btn style1 w-100 d-block">Send Message </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact'
}
</script>