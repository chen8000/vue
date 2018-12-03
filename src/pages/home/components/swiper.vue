<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
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
    props:{
        item:Array
    },
    data (){
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true
            }
        }
    },
    computed:{
        showSwiper (){
            return this.item.length
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


