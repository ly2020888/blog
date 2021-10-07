<script setup lang="ts">
// 将来这里直接拉取信息
const props = defineProps({
    account: String,
    date: String
})
</script>

<template>
<div class = "descriptions">
    <a-descriptions title="原创文章" size="small">
        <a-descriptions-item label="作者名称">{{props.account}}</a-descriptions-item>
        <a-descriptions-item label="发布日期">{{props.date}}</a-descriptions-item><br>
        <a-descriptions-item label="浏览数">0</a-descriptions-item>
        <a-descriptions-item label="收藏">0</a-descriptions-item>
    </a-descriptions>
</div>
</template>

<style>
.descriptions{
    width: 60%;
    padding: 20px;
    border: 1px solid rgba(0,0,0,0.1);
}
</style>