<template>
    <div>
        <Header />
        <Search />
        <List />
        <Alphabet />
    </div>
</template>

<script>
import Header from './components/header'
import Search from './components/search'
import List from './components/list'
import Alphabet from './components/alphabet'

export default {
    name:'City',
    components:{
        Header, 
        Search,
        List,
        Alphabet
    }
}
</script>

<style lang="stylus" scoped>

</style>

