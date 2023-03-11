import {defineStore} from "pinia"
import HYRequest from '@/services/request/index'
import { getHotSuggests,getcategoriesDate, getcontentdate } from "@/services"
const useHomeStore=defineStore("home",{
  state:()=>({
    hotSuggests:[],
    categories:[],
    contentdata:[],
    currentpage:1
  }),
  actions:{
    async fetchHotsuggest(){
      const res= await getHotSuggests()
      this.hotSuggests=res.data
      console.log(this.hotSuggests)
    },
    async fetchHomecategoriesDate(){
      const res=await getcategoriesDate()
      this.categories=res.data
      console.log(this.categories)
    },
    async fetchContentDate(){
      const res=await getcontentdate(this.currentpage)
      this.contentdata.push(...res.data)
      this.currentpage++
      
      
    }
  }
})
export default useHomeStore