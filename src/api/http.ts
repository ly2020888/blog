import { LoginStatus } from "./interfaces"
import { User } from "./settings"
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

export async function login(account:string, pass:string) { //登录
    const p = await axios({
        method:'post',
        url:`${User}/login`,
        data: {
            account: account,
            pass: pass
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