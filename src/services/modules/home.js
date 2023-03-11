import HYRequest from '@/services/request/index'
export function getHotSuggests(){
   return HYRequest.get({
    url:"/home/hotSuggests"
  })
}
export function  getcategoriesDate(){
  return HYRequest.get({
    url:"/home/categories"
  })
}
export function getcontentdate(currentpage=1){
  return HYRequest.get({
    url:"/home/houselist",
    params:{
      page:currentpage
    }
  })
}