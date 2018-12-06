<template>
    <div>
        <Banner :sightName="sightName"  :img="bannerImg" :imgs="bannerImgs"/>
        <Header/>
        <List :list="list"/>
        <div class="content">

        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Banner from './components/banner'
import Header from './components/header'
import List from './components/list'
import axios from 'axios'
export default {
    name:'Detail',
    components:{
        Banner,
        Header,
        List
    },
    data (){
        return {
            sightName:'',
            bannerImg:'',
            bannerImgs:[],
            list:[]
        }
    },
    methods:{
        getDetailInfo (){
            axios.get('/mock/detail.json',{
                params:{
                    id:this.$route.params.id
                }
            }).then(this.handleDataSucc)
        },
        handleDataSucc (re) {
            let res = re.data
            if(res.ret && res.data){
                let data = res.data
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.list = data.categoryList
                this.bannerImgs = data.gallaryImgs
            }
        }
    },
    mounted (){
        this.getDetailInfo()
    }
}
</script>

<style lang="stylus" scoped>
    .content
        height: 50rem
</style>


