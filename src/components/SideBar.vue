<script setup lang="ts">

import { onMounted, ref, watch } from "vue"

let isCollapse = document.body.clientWidth<400 ? ref(true) : ref(false);



function handleOpen(key:any, keyPath:any):void{
    console.log(key, keyPath);
}
function handleClose(key:any, keyPath:any):void{
    console.log(key, keyPath);
}
function handleCollapse(b:boolean):void{
  isCollapse.value = b
}

onMounted(() => {
  window.onresize = () =>{
    console.log("resized!",document.body.clientWidth);
    if(document.body.clientWidth<400){
      handleCollapse(true);
    }else {
      handleCollapse(false);
    }
 }

})

</script>

<template>
   <p>sidebar</p>
</template>

<style>

</style>