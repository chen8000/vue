
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
/* eslint-disable */
import Header from './components/header'
import HomeSwiper from './components/swiper'
import Icons from './components/icons'
import Recommend from './components/recommend'
import Weekend from './components/weekend'
import axios from 'axios'

export default {
    name:'Home',
    components:{
        Header,
        HomeSwiper,
        Icons,
        Recommend,
        Weekend
    },
    methods:{
        // 获取数据
        getHomeInfo:function(){
            axios.get('/mock/index.json')
                 .then(this.getHomeSucc)
        },
        getHomeSucc:function(res){
            console.log(res.data)
        }
    },
    mounted (){
        this.getHomeInfo()
    }
}
</script>

<style lang="stylus" scoped>
    
</style>





