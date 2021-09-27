<script setup lang="ts">
import { ref, reactive } from "vue"
import router from "../router/route" // 获取全局路由对象
interface passage {
    title: string,
    summary: string,

}
const props = defineProps({
    isCollapsed: Boolean,
    passageId: Number
}) 
let property:passage = reactive({
    title: "undefined",
    summary: "undefined"
})

function handleClick():void{
    console.log("get!")
    router.push({
        path: '/View',
        query: {
            passageId: '114514'
        } 
    })
}

</script>
<template>
    <div class="card-container">
     <a-card 
     title="文章标题" 
     style="width: 100%;" 
     :class="{ collapsed: isCollapsed}" 
     :bordered="false" 
     @click="handleClick"
     hoverable
    >
    <template #extra><a href="#">more</a></template>
        <p>“文章梗概阅读文章是从整体到部分再到整体,即初读文章,了解大意后,再理解字词,读懂每句话,给文章分段和归纳段意,最后回到文章整体上来,进而抓住文章的主要内容,并概括中心思想。</p>
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
    
    border-bottom: 1px solid rbga(0,0,0,0.5);
}
</style>