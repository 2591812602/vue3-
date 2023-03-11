import {defineStore} from 'pinia'
import {getcityall} from '@/services'
const useCityStore=defineStore("city",{
  state:()=>({
    allcities:{},
    currentcity:{cityName:"广州"}
  }),
  actions:{
    async fetchAllcitiesData(){
      const res=await getcityall()
      this.allcities=res.data
    }
  }
})
export default useCityStore