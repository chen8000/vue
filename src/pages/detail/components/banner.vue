<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">
                    故宫(AAAAA景区)
                </div>
                <div class="banner-number">
                    <i class="iconfont banner-icon">&#xe692;</i>
                    39
                </div>
            </div>
        </div>  
        <common-gallary v-if="showGallary" :imgs="imgs" @close="handleBannerClick"/>
    </div>
    
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
export default {
    name:'Banner',
    components:{
        CommonGallary
    },
    data (){
        return{
            showGallary:false,
            imgs:[
                "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg",
                "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"
            ]
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
            background-image : linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,1))
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


