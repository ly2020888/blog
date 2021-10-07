import { LoginFormState , RegisterFormState, Passage } from "./interfaces"
import { User, PassageUrl } from "./settings"
import axios from 'axios'

import { resolveComponent } from "_vue@3.2.19@vue"
axios.defaults.withCredentials = true

export async function getLoginStatus() { //探测登录状态
    const result = await axios({
        method:'post',
        url:`${User}/loginStatus`,
      })
    return result
}

export async function login(loginInfo:LoginFormState) { //登录
    const result = await axios({
        method:'post',
        url:`${User}/login`,
        data: {
            account: loginInfo.account,
            pass: loginInfo.pass
        },
      })
    return result
}

export async function logoutHttp() {
    const result = await axios({
        method:'get',
        url:`${User}/logout`
      })
    return result
}

export async function register(registerInfo:RegisterFormState) {
    const result = await axios({
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
    return result;
}

export async function getUserInfo(account:string){
    const result = await axios({
      method:'post',
      url:`${User}/userInfo`,
      data: {
        account: account,
      }
    })
    return result;
}
export async function uploadPassage(passage: Passage, account:string) {
  // 使用标题和一组随机数生成id
  
  const result = await axios({
    method:'post',
    url:`${PassageUrl}/uploadPassage`,
    data: {
      passageId: passage.passageId,
      account: account,
      content: passage.content,
      title: passage.title
    }
  })
  return result;
}
export async function getTotalPassageNum() {
  const result = await axios({
    method:'get',
    url:`${PassageUrl}/getTotalPassageNum`
  })
  return result;
}

export async function getPassage(offset:Number) {
  const result = await axios({
    method:'post',
    url:`${PassageUrl}/getPassage`,
    data:{
      offset: offset
    }
  })
  return result;
}

export async function getPassageContentById(passageId:String|string[]) {
  const result = await axios({
    method:'post',
    url:`${PassageUrl}/getPassageContentById`,
    data:{
      passageId: passageId
    }
  })
  return result;
}