<template>
    <div>
        <div class="item" :key="index" v-for="(item, index) in list">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div v-if="item.children">
                <List :list="item.children"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"List",
    props:{
        list:Array
    }
}
</script>

<style lang="stylus" scoped>
    .item-title-icon
        position:relative
        left:.06rem
        top:.06rem
        display:inline-block
        width:.36rem
        height:.36rem
        background:url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.45rem no-repeat
        margin-right: .1rem
        background-size: .4rem .3rem
    .item-title
        line-height:.8rem
        font-size:.32rem
        padding:0 .2rem
</style>



