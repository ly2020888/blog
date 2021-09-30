<script setup lang="ts">
import UploadAvatar from "../components/UploadAvatar.vue"
import { FormState  } from "../api/interfaces"
import { reactive, toRaw } from "vue"

let labelCol =  { span: 4 }
let wrapperCol = { span: 14 }
const formState = reactive({
    account: '',
    nickname: "wangping",
    delivery: true,

});
const onSubmit = () => {
    console.log('submit!', toRaw(formState));
};
</script>
<template>

    <div class = "set-container">
    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="上传头像">
        <UploadAvatar></UploadAvatar>
        </a-form-item>
        <a-form-item label="是否接受站内私信">
        <a-switch v-model:checked="formState.delivery" />
        </a-form-item>
        <a-form-item label="昵称">
        <a-input v-model:value="formState.nickname" />
        </a-form-item>  
        <a-form-item label="账号">
        <a-input :value="296245702" disabled/>
        </a-form-item> 
        <a-form-item label="邮箱">
        <a-input :value="'296245702@qq.com'" disabled/>
        </a-form-item> 
        <a-form-item label="设置新密码">
        <a-input :value="296245702" />
        </a-form-item> 
        <a-form-item label="确认新密码">
        <a-input :value="296245702" />
        </a-form-item> 
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">Create</a-button>
        <a-button style="margin-left: 10px">Cancel</a-button>
        </a-form-item>
    </a-form>
    </div>
</template>
<style>
.set-container{
    padding-top: 5%;
}
</style>