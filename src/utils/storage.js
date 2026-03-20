//约定一个键名字,用于存储用户信息的key
const KEY_NAME = 'hm_storage_userInfo'
export const getInfo = () =>{
    const defaultObj = { token: '', userId: ''}
    const result = localStorage.getItem(KEY_NAME)
    return result ? JSON.parse(result) : defaultObj
}
export const setInfo = (obj) =>{
    localStorage.setItem(KEY_NAME, JSON.stringify(obj))
}
export const removeInfo = () =>{
    localStorage.removeItem(KEY_NAME)
}