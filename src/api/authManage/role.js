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