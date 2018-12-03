
<template>
    <div class="home">
        <Header :city = "city"/>
        <HomeSwiper :item = "swiperList"/>
        <Icons :icons = "icons"/>
        <Recommend :recommendList = "recommendList"/>
        <Weekend :weekendList = "weekendList"/>
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
    data (){
        return{
            city:'',
            icons:[],
            recommendList:[],
            swiperList:[],
            weekendList:[]
        }
    },
    methods:{
        // 获取数据
        getHomeInfo:function(){
            axios.get('/mock/index.json')
                 .then(this.getHomeSucc)
        },
        getHomeSucc:function(re){
            let res = re.data
            if(res.ret && res.data){
                let {city, icons, recommendList, swiperList, weekendList} = res.data
                this.city = city
                this.icons = icons
                this.recommendList = recommendList
                this.swiperList = swiperList
                this.weekendList = weekendList
            }
            
        }
    },
    mounted (){
        this.getHomeInfo()
    }
}
</script>

<style lang="stylus" scoped>
    
</style>





