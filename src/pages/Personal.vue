<script setup lang="ts">
import { ref, onMounted } from "vue"
import { UserOutlined } from '@ant-design/icons-vue';
import { getUserInfo } from "../api/http"
import { useRoute } from "vue-router"
import { userInfo } from "../api/interfaces"
import { getImgUrl } from "../api/utils"
import { Image } from "../api/settings";
import Frame from "../components/Frame.vue"
const activeKey = ref("1");
const aUserInfo = ref({} as userInfo)

const route = useRoute() //route 对象存放了待查询的用户id
onMounted(() => {
    console.log(route.params.account);
    getUserInfo(route.params.account).then(function(res){
        aUserInfo.value = res.data
        console.log(res.data)
    },function(err){
        console.log(err);
    })
})
</script>

<template>
<div class="container">
    <div class="userinfo">
    <a-descriptions title="用户信息" >
        <a-descriptions-item > 
            <a-avatar :size="64" :src="getImgUrl(Image,aUserInfo.avatarId)">
            <template #icon><UserOutlined /></template>
            </a-avatar>
        </a-descriptions-item>
        <a-descriptions-item label="粉丝数量">{{aUserInfo.fansNum}}</a-descriptions-item>
        <a-descriptions-item label="被访问量">{{aUserInfo.visitNum}}</a-descriptions-item>
        <a-descriptions-item label="个人描述">
        {{aUserInfo.description}}
        </a-descriptions-item>
    </a-descriptions>
    </div>
    
    <div  class="userinfo">
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" :tab="'回复'+'(1)'" class="tab-pane">
                <Frame></Frame>
                <Frame></Frame>
                <Frame></Frame>
            </a-tab-pane>
            
            <a-tab-pane key="2" tab="文章" force-render>
                Content of Tab Pane 2
            </a-tab-pane>

            <a-tab-pane key="3" tab="收藏">
                Content of Tab Pane 3
            </a-tab-pane>
        </a-tabs>
    </div>
</div>
</template>

<style>
.userinfo{
    margin: 25px;
    padding: 25px;
}
.container{
    display: flex;
    height: 100%;
    flex-direction: column;
}
.tab-pane{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
}
</style>