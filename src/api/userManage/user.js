import {
    success,
    error
} from '../../lib/responseTemplate'
import userService from '../../services/userManage/user'
/**
 * @description 登录接口
 */
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

/**
 * @description 用户注册接口
 */
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

/**
 * @description 获取token
 */
export const getToken = async (ctx) => {
    const token = 'xiaobog'
    return success(ctx, {
        token: token
    })
}
/** 
 * @description 查询用户列表
 */

export const queryUserList = async (ctx) => {
    let userList = []
    userList = await userService.queryUserList(ctx.query)
    return success(ctx, userList)
}

/** 
 * @description 删除用户
 */

export const deleteUser = async (ctx) => {
    let {
        id
    } = ctx.request.body
    let userList = []
    userList = await userService.deleteUser(id)
    return success(ctx, userList)
}

/** 
 * @description 删除用户
 */

export const editUser = async (ctx) => {
    let userList = []
    userList = await userService.editUser(ctx.request.body)
    return success(ctx, userList)
}