<script setup lang="ts">
import { RuleObject, ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
import { defineComponent, reactive, ref, UnwrapRef } from 'vue';
import { LoginFormState } from "../api/interfaces"
import { passwordRegExp, accountRegExp } from "../api/utils"
const loginFormState: UnwrapRef<LoginFormState> = reactive({
      account: '',
      pass: '',
});
const Login = ref()
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
        return Promise.reject('账户不能为空');
    } else {
        if (accountRegExp(value)) {
            return Promise.resolve();
        }
        return Promise.reject('账户至少6位');
    }
};
const rules = {
        account: [{ required: true, validator: validateAccount, trigger: 'change' }],
        pass: [{ required: true, validator: validatePass, trigger: 'change' }]
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
  console.log(loginFormState);
  loginVisible.value = false;
};
const handleFinish = (values: LoginFormState) => {
    console.log(values);
};
const handleFinishFailed = (errors: ValidateErrorEntity<LoginFormState>) => {
    console.log(errors);
};
//----
const registerVisible = ref<boolean>(false);
const showRegisterModal = () => {
    registerVisible.value = true;
};

const handleRegisterOk = (e: MouseEvent) => {
  console.log(e);
  registerVisible.value = false;
};
</script>

<template>
<div class="t-container">
        <a-avatar :size="42" >U</a-avatar>
         <a-button type="link" @click="showRegisterModal" >注册</a-button>
         <a-button type="link" @click="showLoginModal" >登录</a-button>
    </div>  
<a-modal v-model:visible="loginVisible" title="登录" @ok="handleLoginOk">
<!-- 登录窗口 -->
    <a-form
    name="custom-validation"
    ref="Login"
    :model="loginFormState"
    :rules="rules"
    v-bind="layout"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item has-feedback label="账户" name="account">
      <a-input v-model:value="loginFormState.account" autocomplete="off" />
    </a-form-item>
    <a-form-item has-feedback label="密码" name="pass">
      <a-input v-model:value="loginFormState.pass" type="password" autocomplete="off" />
    </a-form-item>
  </a-form>
</a-modal>

<a-modal v-model:visible="registerVisible" title="Basic Modal" @ok="handleRegisterOk">
<!-- 注册窗口 -->
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
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