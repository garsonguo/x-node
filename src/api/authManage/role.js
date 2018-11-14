import {
    success,
    error
} from '../../lib/responseTemplate'
import roleService from '../../services/authManage/role'

/** 
 * @description 查询功能列表接口
 */

export const queryList = async (ctx) => {
    let list = []
    list = await roleService.queryList(ctx.query)
    return success(ctx, list)
}
/**
 * @description 新增功能接口
 */
export const add = async (ctx) => {
    let {
        name,
        code,
        description
    } = ctx.request.body
    let info = {
        name: name,
        code: code,
        description: description
    }
    let result = await roleService.add(info)
    return success(ctx, {
        result
    })
}

/** 
 * @description 编辑用户
 */

export const edit = async (ctx) => {
    let list = []
    list = await roleService.edit(ctx.request.body)
    return success(ctx, list)
}

/** 
 * @description 删除用户
 */

export const deleteFunc = async (ctx) => {
    let {
        id
    } = ctx.request.body
    let list = []
    list = await roleService.deleteFunc(id)
    return success(ctx, list)
}

/** 
 * @description 角色添加用户
 */

export const roleAddUser = async (ctx) => {
    let {
        roleId,
        userId
    } = ctx.request.body
    let ids = {
        roleId,
        userId
    }
    let list = []
    list = await roleService.roleAddUser(ids)
    return success(ctx, list)
}

/**
 * @description 查询角色下是否有用户
 */
export const queryRoleUser = async (ctx) => {
    let {
        roleId
    } = ctx.query
    let result = []
    result = await roleService.queryRoleUser(roleId)
    return success(ctx, result)
}

/**
 * @description 查询用户下是否有角色
 */
export const queryUserRole = async (ctx) => {
    let {
        userId
    } = ctx.query
    let result = []
    result = await roleService.queryUserRole(userId)
    return success(ctx, result)
}

/**
 * @description 删除角色用户
 */
export const deleteRoleUser = async (ctx) => {
    let {
        roleId,
        userId
    } = ctx.request.body
    let filter = {
        roleId,
        userId
    }
    let list = []
    list = await roleService.deleteRoleUser(filter)
    return success(ctx, list)
}