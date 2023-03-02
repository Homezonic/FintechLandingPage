<template>
    <div 
        @click="scrollToTop()"
        :class="['back-to-top bounce', {'open': isTop}]"
    >
        <i class="ri-arrow-up-s-line"></i>
    </div> 
</template>

<script>
export default {
    name: 'BackToTop',
    data (){
        return {
            isTop: false
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
    mounted(){
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if(scrollPos >= 100){
                that.isTop = true
            } else {
                that.isTop = false
            }
        })
    }
}
</script>