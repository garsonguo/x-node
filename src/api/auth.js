import {
    success,
    error
} from '../lib/responseTemplate'
import userService from '../services/user'

export let login = async (ctx) => {
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
export let registeredUser = async (ctx) => {
    let name = ctx.request.body.name
    let password = ctx.request.body.password
    let userInfo = {
        name: name,
        password: password
    }
    let user = await userService.registeredUser(userInfo)
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