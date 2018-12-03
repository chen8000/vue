<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide :key="index" v-for="(res, index) in pages">
               <div class="icon"  :key="item.id" v-for="item in res">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.src" alt="">
                    </div>
                    <p class="icon-desc">{{item.title}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name:'Icons',
    props:{
        icons:Array
    },
    data (){
        return {
            swiperOption:{
                autoplay:false
            }
        }
    },
    computed : {
        pages () {
            let pages = []
            this.icons.forEach((item, index) => {
                let page = Math.floor(index / 8) // 总页数
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    @import '~@/assets/styles/mixins.styl'
    .icons >>> .swiper-container
        width : 100%
        height : 0
        padding-bottom :50%
    .icons 
        margin-top:.1rem
        .icon
            position:relative
            width : 25%
            height : 0
            padding-bottom :25%
            float : left
            overflow :hidden
            .icon-img
                position:absolute
                top:0
                left:0
                right:0
                bottom: .44rem
                box-sizing : border-box
                padding:.1rem
                text-align: center
                .icon-img-content
                    display:block
                    height 100%
                    margin: 0 auto
            .icon-desc
                position:absolute
                left:0
                right:0
                bottom:0
                height .44rem
                line-height:.44rem
                color:$darkTextColor
                text-align :center
                ellipsis()
                    

</style>


