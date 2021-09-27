<script setup lang="ts">

import { reactive, toRefs, ref } from "vue"

let value = ref("") 
const onSearch = (searchValue: string) => {
      console.log('use value', searchValue);
      console.log('or use this.value', value.value);
    };
</script>
<template>
<div class="topbar">
    <div class="t-container">
        <a-avatar :size="42" >U</a-avatar>
         <a-button type="link">注册</a-button>
         <a-button type="link">登录</a-button>
    </div>   
    <div class="t-container">
        <a-input-search
            v-model:value="value"
            placeholder="搜索"
            enter-button
            @search="onSearch"
        />
    </div>
</div>
</template>
<style>
.topbar{
    display: flex;
    width:100%;
    height:100%;
    justify-content: space-between;

    margin-bottom: 2px;
}
.t-container{
    display: flex;
    width: 300px;
    height:100%;
    background-color: #fff;
    justify-self: center;
    align-items: center;
    margin-left: 25px;
    margin-right: 15px;
}

</style>