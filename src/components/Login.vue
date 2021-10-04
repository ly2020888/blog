<script setup lang="ts">
import { RuleObject, ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
import { reactive, ref, UnwrapRef, inject } from 'vue';
import Md5 from "../api/md5"
import { login, logoutHttp, register, getUserInfo } from "../api/http"
import { message } from 'ant-design-vue';
import { LoginFormState, RegisterFormState } from "../api/interfaces"
import { passwordRegExp, accountRegExp, emailRegExp } from "../api/utils"

let getAppInfo = inject("getAppInfo", Function, true) //获取全局信息
let setAppInfo = inject("setAppInfo", Function, true) //设置全局信息
let app = getAppInfo();

const loginFormState: UnwrapRef<LoginFormState> = reactive({
      account: '',
      pass: '',
});

const registerFormState: UnwrapRef<RegisterFormState> = reactive({
      account: '',
      pass: '',
      checkpass: "",
      email: "",
      verification: ""
});
let validatePass = async (rule: RuleObject, value: string) => {
    if (value === '') {
        return Promise.reject('密码不能为空');
    } else {
        if (passwordRegExp(value)) {
            return Promise.resolve();
        }
        return Promise.reject('密码为6位以上的字母和数字混合');
    }
};
let validateAccount = async (rule: RuleObject, value: string) => {
    if (value === '') {
        return Promise.reject('该项不能为空');
    } else {
        if (accountRegExp(value)) {
            return Promise.resolve();
        }
        return Promise.reject('该项至少6位');
    }
};
let validateCheckPass = async (rule: RuleObject, value: string) => {
    
    if ((value != registerFormState.pass) || !passwordRegExp(value)) {
        return Promise.reject('两次输入的密码不同');
    } else {
        return Promise.resolve();
    }
};
let validateEmail = async (rule: RuleObject, value: string) => {
    
    if (emailRegExp(value)) {
        return Promise.resolve();
        
    } else {
        return Promise.reject('邮箱格式不正确');
    }
};

const rules = {
        account: [{ required: true, validator: validateAccount, trigger: 'change' }],
        pass: [{ required: true, validator: validatePass, trigger: 'change' }],
        checkpass: [{ required: true, validator: validateCheckPass, trigger: 'change' }],
        email: [{ required: true, validator: validateEmail, trigger: 'change' }],
        verification: [{ required: true, validator: validateAccount, trigger: 'change' }]
};

const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
};
const loginVisible = ref<boolean>(false);

const showLoginModal = () => {
    loginVisible.value = true;
};

const handleLoginOk = (e: MouseEvent) => {
  
  loginFormState.pass = new Md5().get_md5(loginFormState.pass);
  login(loginFormState).then(function (res){

      if(res.data.code){
        message.error(res.data.text, 2);
      }else{
        message.success(res.data.text, 2);
        loginVisible.value = false;
        getUserInfo(res.data.account).then(function(response){
        if(response.data.code){
          message.error(response.data.text,2);
        }else{

          app.value.account = response.data.account;
          app.value.email = response.data.email;
          app.value.verification = response.data.verification;
          app.value.avatarId = response.data.avatarId;
          app.value.isLogged = true;
          setAppInfo(app);//发送登录成功事件，通知顶层已登录，更新全局状态 
        }
        
      })
      }
      
      
      // 获取用户的详细信息
      
  }, function(err){
      console.log(err);
       message.error("网络错误", 2);
  })
};
//----注册逻辑


const registerVisible = ref<boolean>(false);
const showRegisterModal = () => {
    registerVisible.value = true;
};

const handleRegisterOk = (e: MouseEvent) => {
  console.log(registerFormState);
  registerVisible.value = false;
  register(registerFormState).then(function(res){
      message.success(res.data.text, 2);
  },function(err){
      message.error("网络错误", 2);
  })
};

//---
function logout():void{
    logoutHttp()
    app.value.isLogged = false;
    setAppInfo(app);
    message.success("已退出登录", 2);
}
</script>

<template>
<div class="t-container">
        <a-avatar :size="42" >U</a-avatar>
        <a-button type="link" @click="showRegisterModal" v-show="!app.isLogged">注册</a-button>
        <a-button type="link" @click="showLoginModal" v-show="!app.isLogged">登录</a-button>
        <a-button type="link" @click="logout" v-show="app.isLogged">退出登录</a-button>
    </div>  
<a-modal v-model:visible="loginVisible" title="登录" :footer="null">
<!-- 登录窗口 -->
    <a-form
    name="custom-validation"
    :model="loginFormState"
    :rules="rules"
    v-bind="layout"
    @finish="handleLoginOk"
  >
    <a-form-item has-feedback label="账户" name="account">
      <a-input v-model:value="loginFormState.account" autocomplete="off" />
    </a-form-item>
    <a-form-item has-feedback label="密码" name="pass">
      <a-input v-model:value="loginFormState.pass" type="password" autocomplete="off" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" html-type="submit">登录</a-button>
    </a-form-item>
  </a-form>
</a-modal>

<a-modal v-model:visible="registerVisible" title="注册" :footer="null">
<!-- 注册窗口 -->
  <a-form
    name="custom-validation"
    :model="registerFormState"
    :rules="rules"
    v-bind="layout"
    @finish="handleRegisterOk"
  >
    <a-form-item has-feedback label="账户" name="account">
      <a-input v-model:value="registerFormState.account" autocomplete="off" />
    </a-form-item>
    <a-form-item has-feedback label="密码" name="pass">
      <a-input v-model:value="registerFormState.pass" type="password" autocomplete="off" />
    </a-form-item>
    <a-form-item has-feedback label="确认密码" name="checkpass">
      <a-input v-model:value="registerFormState.checkpass" type="password" autocomplete="off" />
    </a-form-item>
    <a-form-item has-feedback label="邮箱" name="email">
      <a-input v-model:value="registerFormState.email" autocomplete="off" />
    </a-form-item>
    <a-form-item has-feedback label="验证码" name="verification">
      <a-input v-model:value="registerFormState.verification" autocomplete="off" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" html-type="submit">注册</a-button>
    </a-form-item>
  </a-form>
  
</a-modal>

</template>

<style>
.t-container{
    display: flex;
    width: 300px;
    height:100%;
    background-color: #fff;
    justify-self: center;
    align-items: center;
    margin-left: 25px;
    margin-right: 15px;
}
</style>