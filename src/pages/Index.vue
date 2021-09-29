<script setup lang="ts">
    import Column from "../components/Column.vue"
    import { inject } from "vue"

    let getAppInfo = inject("appContext", Function, true) //取出全局信息
    let { isPhone } = getAppInfo();
</script>
<template>
    <div class="index">
        <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Index</a></a-breadcrumb-item>
        </a-breadcrumb>
        <Column :isCollapsed="isPhone"></Column>
    </div>
</template>
<style>
.index{
    display: flex;
    padding: 20px;
    flex-direction: column;
}
</style>