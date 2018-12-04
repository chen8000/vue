<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
    name:'Search'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
    .search
        height: .72rem
        padding: 0 .1rem
        background: $bgColor
        .search-input
            height: .62rem /* 31/50 */
            line-height: .62rem /* 31/50 */
            width: 100%
            text-align: center
            border-radius:.06rem
            color: #666
            padding:0 .1rem
            box-sizing: border-box
</style>


