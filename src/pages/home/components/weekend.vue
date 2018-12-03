<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" :key="res.id" v-for="res in weekendList">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="res.imgSrc" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{res.title}}</p>
                    <p class="item-desc">{{res.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Weekend',
    data (){
        return {
            weekendList:[
                {
                    id:'01',
                    imgSrc:require('@/assets/img/home/weekend/item1.jpg'),
                    title:'北京野生动物园',
                    desc:'17775条评论'
                },
                {
                    id:'02',
                    imgSrc:require('@/assets/img/home/weekend/item1.jpg'),
                    title:'北京野生动物园',
                    desc:'17775条评论'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/mixins.styl'
    .title
        line-height :.8rem
        background: #eee
        text-indent:.2rem   
    .item-info
        padding:.1rem
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height:.4rem
            color: #ccc
            ellipsis()
    .item-img-wrapper
        height: 0
        width : 100%
        padding-bottom: 36.6%
        overflow hidden

        img 
            width: 100%
</style>


