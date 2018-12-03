
<template>
    <div class="home">
        <Header />
        <HomeSwiper />
        <Icons />
    </div>
</template>

<script>

import Header from './components/header'
import HomeSwiper from './components/swiper'
import Icons from './components/icons'

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





