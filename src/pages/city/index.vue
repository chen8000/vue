<template>
    <div>
        <Header />
        <Search />
    </div>
</template>

<script>
import Header from './components/header'
import Search from './components/search'

export default {
    name:'City',
    components:{
        Header, 
        Search
    }
}
</script>

<style lang="stylus" scoped>

</style>

