<template>
    <div class="testimonial-wrap pt-100 pb-75 bg-albastor">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                    <div class="section-title style1 text-center mb-40">
                        <span>Our Testimonials</span>
                        <h2>What Client Says About Us</h2>
                    </div>
                </div>
            </div>
            <div class="testimonial-slider-one">
                <carousel
                    :autoplay="5000"
                    :settings='settings'
                    :breakpoints="breakpoints"
                >
                    <Slide v-for="slide in carouselItems" :key="slide.id">
                        <div class="testimonial-card style1">
                            <div class="client-info-area">
                                <div class="client-info-wrap">
                                    <div class="client-img">
                                        <img :src="slide.image" alt="Image">
                                    </div>
                                </div>
                                <div class="quote-icon">
                                    <i class="flaticon-quote"></i>
                                </div>
                            </div>
                            <p class="client-quote">{{slide.desc}}</p>
                            <div class="client-info">
                                <h3>{{slide.name}}</h3>
                                <span>{{slide.position}}</span>
                            </div>
                        </div>
                    </Slide>

                    <template #addons>
                        <navigation>
                            <template #next>
                                <i class='flaticon-next'></i>
                            </template>
                            <template #prev>
                                <i class='flaticon-left-arrow-1'></i>
                            </template>
                        </navigation>
                    </template>
                </carousel>
            </div>
        </div>
    </div> 
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'Testimonials',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        carouselItems: [
            {
                id: 1,
                image: require('../../assets/images/testimonials/client-1.jpg'),
                desc: 'Lorem ipsum dolor sit amet adi elition repell tetur delni vel quam aliq earum explibo dolor eme fugiat amet dolor lorem sit consect.',
                name: 'Jim Morison',
                position: 'Director, BAT',
            },
            {
                id: 2,
                image: require('../../assets/images/testimonials/client-2.jpg'),
                desc: 'Lorem ipsum dolor sit amet adi elition repell tetur delni vel quam aliq earum explibo dolor eme fugiat amet dolor lorem sit consect.',
                name: 'Alex Cruis',
                position: 'CEO, IBAC',
            },
            {
                id: 3,
                image: require('../../assets/images/testimonials/client-3.jpg'),
                desc: 'Lorem ipsum dolor sit amet adi elition repell tetur delni vel quam aliq earum explibo dolor eme fugiat amet dolor lorem sit consect.',
                name: 'Tom Haris',
                position: 'Engineer, Olleo',
            },
            {
                id: 4,
                image: require('../../assets/images/testimonials/client-4.jpg'),
                desc: 'Lorem ipsum dolor sit amet adi elition repell tetur delni vel quam aliq earum explibo dolor eme fugiat amet dolor lorem sit consect.',
                name: 'Harry Jackson',
                position: 'Enterpreneur',
            },
            {
                id: 5,
                image: require('../../assets/images/testimonials/client-5.jpg'),
                desc: 'Lorem ipsum dolor sit amet adi elition repell tetur delni vel quam aliq earum explibo dolor eme fugiat amet dolor lorem sit consect.',
                name: 'Chris Haris',
                position: 'MD, ITec',
            },
            {
                id: 6,
                image: require('../../assets/images/testimonials/client-6.jpg'),
                desc: 'Lorem ipsum dolor sit amet adi elition repell tetur delni vel quam aliq earum explibo dolor eme fugiat amet dolor lorem sit consect.',
                name: 'Mark Owen',
                position: 'Enterpreneur',
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 1,
			},
            768: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
        },
    }),
})
</script>