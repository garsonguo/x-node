import {
    success,
    error
} from '../lib/responseTemplate'
import userService from '../services/user'

export const login = async (ctx) => {
    let name = ctx.query.name
    let password = ctx.query.password
    if (!name || !password) {
        error(ctx, '请输入用户名密码')
    }
    let user = await userService.getUserByUserAndPwd(name, password)
    return success(ctx, {
        token: user.name
    })
}
export const registered = async (ctx) => {
    let {
        account,
        name,
        password,
        phone,
        email
    } = ctx.request.body
    let userInfo = {
        account: account,
        name: name,
        password: password,
        phone: phone,
        email: email
    }
    let user = await userService.registered(userInfo)
    return success(ctx, {
        user
    })
}
export let getToken = async (ctx) => {
    const token = 'xiaobog'
    return success(ctx, {
        token: token
    })
}