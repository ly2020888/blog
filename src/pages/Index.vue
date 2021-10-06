<script setup lang="ts">
    import Column from "../components/Column.vue"
    import { inject, ref, onMounted } from "vue"
    import { getTotalPassageNum } from "../api/http"
    let getAppInfo = inject("getAppInfo", Function, true) //取出全局信息
    let { isPhone } = getAppInfo();
    let current = ref(1);
    let totalNum = ref(0)
    onMounted( ()=>
    getTotalPassageNum().then(function(res){
        totalNum.value = res.data.passageNum;
        console.log("检索到文章数量:"+totalNum.value );
    })
)
</script>
<template>
    <div class="index">
        <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Index</a></a-breadcrumb-item>
        </a-breadcrumb>
        <Column :isCollapsed="isPhone"></Column>
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