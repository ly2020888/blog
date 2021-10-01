<script setup lang="ts">
</script>

<template>
<div class="frame">
    <a-card hoverable :bordered="false" title="这是文章标题">
        <a-card-meta title="用户昵称">
            <template #avatar>
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />  
            </template>
        </a-card-meta><br>
        <p class="summary">文章预览文章预览文章预览文章预览文章预览文章预览文章预览文章预览文章预览文章预览文章预览文章预览文章预览文章预览文章预览文章预览文章预览</p>
    </a-card>
</div>
</template>

<style>
@import url("../../public/css/mystyle.css");
.frame{
    width: 100%;
    margin-bottom: 2%;
}
</style>