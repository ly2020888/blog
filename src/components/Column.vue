<script setup lang="ts">
import { ref, reactive } from "vue"
import router from "../router/route" // 获取全局路由对象
import { Summary } from "../api/interfaces"

const props = defineProps({
    isCollapsed: Boolean,
    passageId: String,
    title: String,
    content: String,
    createdAt: String,
    updatedAt: String
}) 


function handleRouter():void{
    router.push({
        path: '/View',
        query: {
            passageId: props.passageId
        } 
    })
}

</script>
<template>
    <div class="card-container">
     <a-card 
     :title="title"
     style="width: 100%;" 
     :class="{ collapsed: isCollapsed}" 
     @click="handleRouter"
     hoverable
    >
    <template ><a href="#">more</a></template>
        <p>{{ props.content?.slice(0,50)+"..."}}</p>
     </a-card>
    </div>
</template>
<style>
.collapsed{
    width:100% !important;
}
.card-container{
    margin: 5px;
    padding: 15px 15px;
}
</style>