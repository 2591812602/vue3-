import hyRequest from '@/services/request'
export function getcityall(){
   return hyRequest.get({
     url:"/city/all"
   })
}