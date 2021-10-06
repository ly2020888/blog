<script setup lang="ts">
    import Column from "../components/Column.vue"
    import { inject, ref, onMounted, watch } from "vue"
    import { getTotalPassageNum, getPassage } from "../api/http"
    import { Passage } from "../api/interfaces"
    let getAppInfo = inject("getAppInfo", Function, true) //取出全局信息
    let { isPhone } = getAppInfo();
    let current = ref(1);
    let totalNum = ref(0);
    let passageList = ref([] as Passage[])
    onMounted( ()=>{
        getTotalPassageNum().then(function(res){
            totalNum.value = res.data.passageNum;
            console.log("检索到文章数量:"+totalNum.value );
        })
        getPassage(0).then(function(res){
                passageList.value = res.data;
            })
    })
    watch(
        ()=>current.value,
        (oldValue, Value)=>{
            getPassage((Value)*5).then(function(res){
                passageList.value = res.data;
            })
    })
</script>
<template>
    <div class="index">
        <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Index</a></a-breadcrumb-item>
        </a-breadcrumb>
        
        <Column 
        :isCollapsed="isPhone" 
        v-for="p in passageList"
        :passageId="p.passageId"
        :title="p.title"
        :content="p.content"
        :createdAt="p.createdAt"
        :updatedAt="p.updatedAt"
        ></Column>
        <div class="pagination">
        <a-pagination v-model:current="current" :total="totalNum" show-less-items   :hideOnSinglePage="true" :pageSize="5"/>
        </div>
    </div>
    
</template>
<style>
.index{
    display: flex;
    padding: 20px;
    height:100%;
    flex-direction: column;
}
.pagination{
    width: 100%;
    display: flex;
    align-self: flex-end;
    justify-content: center;
}
</style>