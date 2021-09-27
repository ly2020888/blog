<script setup lang="ts">
    import Column from "../components/Column.vue"
    import { inject } from "vue"

    let getAppInfo = inject("appContext", Function, true) //取出全局信息
    let { isPhone } = getAppInfo();
</script>
<template>
    <Column :isCollapsed="isPhone"></Column>
</template>
<style>
</style>