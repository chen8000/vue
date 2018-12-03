<template>
    <div class="header">
        <div class="left">
            <div class="iconfont left-icon">&#xe624;</div>
        </div>
        <div class="input">
            <i class="iconfont">&#xe600;</i>
            输入城市/景点/游玩主题</div>
        <div class="right">城市<i class="iconfont right-icon">&#xe64a;</i></div>
    </div>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl';
    .header
        display: flex
        line-height: .86rem /* 43/50 */
        background: $bgColor
        color: #fff
        .left
            width: .64rem /* 32/50 */
            float: left
            .left-icon
                text-align: center
                font-size: .4rem
        .input 
            flex: 1
            background: #fff
            border-radius: .1rem
            margin-top: .12rem
            height: .64rem
            color: #ccc
            line-height: .64rem
            padding-left: .2rem
        .right           
            width: 1.24rem
            float: right
            text-align: center  
            .right-icon
                display: inline-block
                margin-left: .1rem /* 5/50 */
                font-size: .24rem   
</style>





