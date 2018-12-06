<template>
    <ul class="list">
        <li class="item" 
            :ref = "item"
            :key = "item" 
            v-for = "item in letters"
            @click = "handleLetterClick"
            @touchstart.prevent = "handleTouchStart"
            @touchmove = "handleTouchMove"
            @touchend = "handleTouchEnd"
            >{{item}}</li>
    </ul>
</template>

<script>
/* eslint-disable */
export default {
    name : "Alphabet",
    props:{
        cities:Object
    },
    data (){
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    computed:{
        letters () {
            let letters = []

            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    updated (){
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods:{
        handleLetterClick (e){
            this.$emit('change', e.target.innerText)
        },
        handleTouchStart (){
            this.touchStatus = true
        },
        handleTouchMove (e){
            if(this.timer){
                clearInterval(this.timer)
            }
            if(this.touchStatus){
                
                this.timer = setInterval(() => {
                    
                    // 字母A距离顶部的距离

                    // 滑动的手指距离顶部的距离
                    const touchY = e.touches[0].clientY - 79  

                    // 手指距离顶部的距离 - 字母A距离顶部的距离  /  字母的高度   =  字母的下标
                    const index  = Math.floor((touchY - this.startY) / 20)  

                    if(index >= 0 && index < this.letters.length){
                        
                        this.$emit('change', this.letters[index])
                    }
                }, 16)

                
            }
        },
        handleTouchEnd (){
            clearInterval(this.timer)
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
    .list
        display:flex
        flex-direction : column
        justify-content center
        position: absolute
        top: 1.58rem
        right: 0
        bottom:0
        width: .4rem
        .item
            text-align: center
            line-height: .4rem
            color: $bgColor 

</style>


