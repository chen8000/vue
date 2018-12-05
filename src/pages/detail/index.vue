<template>
    <div>
        <Banner/>
        <Header/>
        <div class="content">

        </div>
    </div>
</template>

<script>
import Banner from './components/banner'
import Header from './components/header'
export default {
    name:'Detail',
    components:{
        Banner,
        Header
    }
}
</script>

<style lang="stylus" scoped>
    .content
        height: 50rem
</style>


