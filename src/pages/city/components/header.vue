<template>
    <div class="header">
        选择城市
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
    .header
        height: $headerHeight
        overflow: hidden
        line-height : $headerHeight
        text-align:center
        color:#fff
        background:$bgColor
        font-size: .32rem
        position:relative
        .header-back
            width: .64rem
            text-align: center
            font-size:.4rem
            position:absolute
            top:0
            left:0
            color:white

</style>



