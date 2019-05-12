import Cookie from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken(){
    return Cookie.get(TokenKey) 
}

export function setToken(){
    return Cookie.set(TokenKey, token)
}