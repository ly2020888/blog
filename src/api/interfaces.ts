import { Moment } from 'moment';
interface Passage {
    title: string,
    summary: string,
}
interface LoginFormState {
    account: string;
    pass: string;
}
interface RegisterFormState {
    account: string;
    pass: string;
    checkpass: string;
    email: string;
    verification: string;
}
interface FileItem {
    uid: string;
    name?: string;
    status?: string;
    response?: string;
    url?: string;
    type?: string;
    size: number;
    originFileObj: any;
}
  
interface FileInfo {
    file: FileItem;
    fileList: FileItem[];
}
interface FormState {
    account: string;
    nickname: string;
    delivery: boolean;
  }
interface LoginStatus{
    account: string;
    status: number;
}
interface appInfo { 
    isPhone:Boolean;
    isLogged:Boolean;
    account: string | undefined;
    email: string | undefined;
    verification: string | undefined;
    avatarId : Number | undefined;
}
export {
    Passage,
    FileItem,
    FileInfo,
    FormState,
    LoginFormState,
    LoginStatus,
    appInfo,
    RegisterFormState
}