<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import SideBar from './components/SideBar.vue'
import TopBar from "./components/TopBar.vue"
import Information from "./pages/Information.vue"
import { ref, onMounted, provide, reactive, Ref } from "vue"
import { appInfo } from "./api/interfaces"
import { getLoginStatus } from "./api/http"
let collapsed = document.body.clientWidth > 500? ref<boolean>(true) : ref<boolean>(false)

let app:Ref<appInfo> = ref({
  isPhone:!collapsed.value,
  isLogged:false,
  account: undefined,
  email: undefined,
  verification: undefined,
  avatarId: undefined
})
getLoginStatus().then(function (res){
  app.value.isLogged = res.data.isLogged
})
function getAppInfo():Ref<appInfo>{
   return app
}
function setAppInfo(newone:Ref<appInfo>):void{
  app.value = newone.value
}
provide('getAppInfo', getAppInfo) // provide 全局信息获取函数
provide('setAppInfo', setAppInfo) // provide 全局信息设置函数

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
  margin-top: 20px;
  padding: 5px;
  width: 100%;
  justify-content: center;
  display: flex;
  overflow: hidden;
  height:100%;
  
}
#main{
  display: flex;
  width: 100%;
  padding-bottom: 20px;;
}
.passage{
  background-color: #fff;
  width: 100%;
  overflow-y: scroll;
  margin-top: 0px !important;
  margin-left: 20px;
  margin-right: 20px;
  height: 100%;
}
.infoBar{
  background-color: #fff;
  margin-right: 50px;
}
.header{
 padding: 0 !important;
 background-color:  #fff !important;
 border-bottom: 1px solid rgba(0,0,0,0.2);
}

</style>
