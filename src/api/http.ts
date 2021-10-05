import { LoginFormState , RegisterFormState, Passage } from "./interfaces"
import { User, PassageUrl } from "./settings"
import axios from 'axios'

import { resolveComponent } from "_vue@3.2.19@vue"
axios.defaults.withCredentials = true

export async function getLoginStatus() { //探测登录状态
    const p = await axios({
        method:'post',
        url:`${User}/loginStatus`,
      })
    return p
}

export async function login(loginInfo:LoginFormState) { //登录
    const p = await axios({
        method:'post',
        url:`${User}/login`,
        data: {
            account: loginInfo.account,
            pass: loginInfo.pass
        },
      })
    return p
}

export async function logoutHttp() {
    const p = await axios({
        method:'get',
        url:`${User}/logout`
      })
    return p
}

export async function register(registerInfo:RegisterFormState) {
    const p = await axios({
      method:'post',
      url:`${User}/register`,
      data: {
        account: registerInfo.account,
        pass: registerInfo.pass,
        checkpass: registerInfo.checkpass,
        email: registerInfo.email,
        verification: registerInfo.verification
      }
    })
    return p
}

export async function getUserInfo(account:string){
    const p = await axios({
      method:'post',
      url:`${User}/userInfo`,
      data: {
        account: account,
      }
    })
    return p;
}
export async function uploadPassage(passage: Passage, account:string) {
  // 使用标题和一组随机数生成id
  
  const p = await axios({
    method:'post',
    url:`${PassageUrl}/uploadPassage`,
    data: {
      passageId: passage.passageId,
      account: account,
      content: passage.content,
      title: passage.title
    }
  })
  return p;
}