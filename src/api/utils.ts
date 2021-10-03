export function getBase64(img: Blob, callback: (base64Url: string) => void) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
}

export function passwordRegExp(value:string):Boolean{
    const reg:RegExp = /[0-9]{0,}[a-z|A-Z]{1,}[0-9]{0,}/
    return reg.test(value) && value.length >= 6
}

export function accountRegExp(value:string):Boolean{
    return value.length >= 6
}

export function emailRegExp(value:string):Boolean{
    const reg:RegExp = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/
    return reg.test(value)
}