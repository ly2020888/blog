<script setup lang="ts">

import { reactive, toRefs, ref } from "vue"
import Login from "./Login.vue"
let value = ref("") 
const onSearch = (searchValue: string) => {
      console.log('use value', searchValue);
      console.log('or use this.value', value.value);
    };
</script>
<template>

<div class="topbar">
     <Login></Login>
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


</style>