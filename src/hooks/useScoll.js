import { onMounted,onUnmounted,ref } from "vue"
import {throttle} from 'underscore'
// console.log(throttle)
export default  function useScroll(reach){
  const scrollTop=ref(0)
  const scrollheight=ref(0)
  const currentheight=ref(0)
  const scolllistenhandler=throttle(()=>{
    currentheight.value=document.documentElement.clientHeight
    scrollTop.value=document.documentElement.scrollTop
    scrollheight.value=document.documentElement.scrollHeight
    console.log("节流")
    if(scrollTop.value+1000 >=scrollheight.value){
      if(reach)reach()
    }
    
  },100)
  
  onMounted(()=>{
    window.addEventListener("scroll",scolllistenhandler)
  })
  onUnmounted(()=>{
    window.removeEventListener("scroll",scolllistenhandler)
  })
  return{currentheight,scrollTop,scrollheight}
}