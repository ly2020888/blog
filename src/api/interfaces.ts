import { Moment } from 'moment';
interface Passage {
    title: string,
    summary: string,
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
export {
    Passage,
    FileItem,
    FileInfo,
    FormState
}