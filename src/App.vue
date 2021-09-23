<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import SideBar from './components/SideBar.vue'
import TopBar from "./components/TopBar.vue"
</script>

<template>
<div class="homeWrap">
  <a-layout class="main_container">

    <a-layout-header class="header">
      <TopBar></TopBar>
    </a-layout-header> 

    <a-layout>
    <a-layout-sider >
      <SideBar class="aside"></SideBar>
    </a-layout-sider>
    <a-layout-content>
      <router-link to="/Edit">Go to Home</router-link>
      <router-link to="/Index">Go to About</router-link>
      <router-link to="/View">Go to About</router-link>
      <router-view></router-view>
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

.header{
 padding: 0 !important;
 border-bottom: 1px solid rgba(0,0,0,0.2);
}
</style>
