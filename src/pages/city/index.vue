<template>
    <div>
        <Header />
        <Search />
        <List :cities = "cities" :hot = "hotCities"/>
        <Alphabet :cities = "cities"/>
    </div>
</template>

<script>
import Header from './components/header'
import Search from './components/search'
import List from './components/list'
import Alphabet from './components/alphabet'
import axios from 'axios'

export default {
    name:'City',
    components:{
        Header, 
        Search,
        List,
        Alphabet
    },
    data () {
        return{
            cities:{},
            hotCities:[]
        }
    },
    methods:{
        getCityInfo (){
            axios.get('/mock/city.json')
                .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(re) {
            let res = re.data

            if(res.ret && res.data){
                this.cities = res.data.cities
                this.hotCities = res.data.hotCities
            }
        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>

