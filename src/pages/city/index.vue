<template>
    <div>
        <Header />
        <Search :cities = "cities"/>
        <List :cities = "cities" :letter = "letter" :hot = "hotCities"/>
        <Alphabet 
            :cities = "cities"
            @change = "handleLetterChange"
            />
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
            hotCities:[],
            letter:''
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
        },
        handleLetterChange(letter){
            this.letter = letter
        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>

