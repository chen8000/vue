<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide :key="res.id" v-for="res in item">
                <img class="swiper-img" :src='res.src' alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>


<script>

export default {
    name:'HomeSwiper',
    data (){
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true
            },
            item:[
                {
                    id:'01',
                    src:require('@/assets/img/home/swiper/item1.jpg')
                },
                {
                    id:'02',
                    src:require('@/assets/img/home/swiper/item2.jpg')
                }
            ]
        }
    }
}
</script>


<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff
    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 26.666%
        background: #eee
        .swiper-img
            width: 100%
</style>


