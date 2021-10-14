import { Moment } from 'moment';
interface Summary {
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
interface Passage{
    passageId: string;
    title: string;
    content: string;
    createdAt: string | undefined;
    updatedAt: string | undefined;
}
interface userInfo{
    account: String;
    email: String;
    priority: Number;
    avatarId: String;
    fansNum: Number;
    visitNum: Number;
    description: String;
}
export {
    Passage,
    Summary,
    FileItem,
    FileInfo,
    FormState,
    LoginFormState,
    LoginStatus,
    appInfo,
    RegisterFormState,
    userInfo
}