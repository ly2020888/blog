<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import SideBar from './components/SideBar.vue'
import TopBar from "./components/TopBar.vue"
import Information from "./pages/Information.vue"
import { ref, onMounted, provide } from "vue"

let collapsed = document.body.clientWidth > 500? ref<boolean>(true) : ref<boolean>(false)
interface appInfo { // 全局app信息放在这里
  isPhone:Boolean
}
function getAppInfo():appInfo{
    return {
      isPhone: !collapsed.value
    }
}
provide('appContext', getAppInfo) // provide 全局信息获取函数


</script>

<template>
<div class="homeWrap">
  <a-layout class="main_container">

    <a-layout-header class="header">
      <TopBar></TopBar>
    </a-layout-header> 

    <a-layout>
    <a-layout-sider :collapsed="true" :trigger="null" collapsible v-if="collapsed">
      <SideBar class="aside" ></SideBar>
    </a-layout-sider>
    <a-layout-content>
      <router-link to="/Edit">Go to Home</router-link>
      <router-link to="/Index">Go to About</router-link>
      <router-link to="/View">Go to About</router-link>
      <div class="passage_container">
        <div id="main">
         <router-view class="passage"></router-view>
         <Information class="infoBar" v-if="collapsed"></Information>
        </div>
      </div>
      
    </a-layout-content>
    </a-layout>

  </a-layout>
  </div>
</template> 

<style>
.homeWrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.main_container {
  height: 100%;
}
.aside{
  height:100%;
}
.passage_container{
  margin: 5px;
  padding: 5px;
  width: 100%;
  justify-content: center;
  display: flex;
  overflow: hidden;
  height:100%;
  
}
#main{
  display: flex;
}
.passage{
  background-color: #fff;
  
}
.infoBar{
  background-color: #fff;
}
.header{
 padding: 0 !important;
 background-color:  #fff !important;
 border-bottom: 1px solid rgba(0,0,0,0.2);
}

</style>
