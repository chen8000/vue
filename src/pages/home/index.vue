
<template>
    <div class="home">
        <Header />
        <HomeSwiper />
        <Icons />
        <Recommend />
        <Weekend />
    </div>
</template>

<script>

import Header from './components/header'
import HomeSwiper from './components/swiper'
import Icons from './components/icons'
import Recommend from './components/recommend'
import Weekend from './components/weekend'

export default {
    name:'Home',
    components:{
        Header,
        HomeSwiper,
        Icons,
        Recommend,
        Weekend
    }
}
</script>

<style lang="stylus" scoped>
    
</style>





