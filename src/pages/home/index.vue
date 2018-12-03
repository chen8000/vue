
<template>
    <div class="home">
        <Header />
        <HomeSwiper />
        <Icons />
    </div>
</template>

<script>

import Header from './components/header.vue'
import HomeSwiper from './components/swiper.vue'
import Icons from './components/icons.vue'

export default {
    name:'Home',
    components:{
        Header,
        HomeSwiper,
        Icons
    }
}
</script>

<style lang="stylus" scoped>
    
</style>





