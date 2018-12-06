<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="img" alt="">
            <div class="banner-info">
                <div class="banner-title">
                    {{sightName}}
                </div>
                <div class="banner-number">
                    <i class="iconfont banner-icon">&#xe692;</i>
                    39
                </div>
            </div>
        </div>  
        <Fade>
            <common-gallary v-if="showGallary" :imgs="imgs" @close="handleBannerClick"/>
        </Fade>
    </div>
    
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
import Fade from '@/common/fade/fade'
export default {
    name:'Banner',
    components:{
        CommonGallary,
        Fade
    },
    props:{
        sightName:String,
        img:String,
        imgs:Array
    },
    data (){
        return{
            showGallary:false,
        }
    },
    methods:{
        handleBannerClick (){
            this.showGallary = !this.showGallary
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        overflow :hidden
        width: 100%
        height: 0
        padding-bottom:55%
        position:relative
        color:white
        .banner-img
            width:100%
        .banner-info
            display:flex
            position:absolute
            left:0
            right:0
            bottom:0
            line-height:.6rem
            background-image : linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))
            .banner-title
                flex:1
                font-size:.32rem
                padding: 0 .2rem
            .banner-number
                padding:0 .4rem
                margin-top:.14rem
                line-height: .32rem
                height:.32rem
                border-radius:.2rem
                background:rgba(0,0,0,.4)
                font-size: .24rem
                .banner-icon
                    font-size:.24rem
</style>


