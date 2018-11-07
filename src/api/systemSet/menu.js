import {
    success,
    error
} from '../../lib/responseTemplate'
import service from '../../services/systemSet/menu'

/** 
 * @description 查询功能列表接口
 */

export const queryList = async (ctx) => {
    let list = []
    list = await service.queryList(ctx.query)
    return success(ctx, list)
}
/**
 * @description 新增功能接口
 */
export const add = async (ctx) => {
    let {
        parentId,
        name,
        title,
        authCode,
        sort,
        leftShow,
        lock,
        icon
    } = ctx.request.body
    let info = {
        parentId: parentId,
        title: title,
        name: name,
        sort: sort,
        leftShow: leftShow,
        lock: lock,
        icon: icon,
        path: name
    }
    let data = await service.add(info)
    return success(ctx, data)
}

/** 
 * @description 编辑用户
 */

export const edit = async (ctx) => {
    let list = []
    list = await service.edit(ctx.request.body)
    return success(ctx, list)
}

/** 
 * @description 删除用户
 */

export const deleteMenu = async (ctx) => {
    let {
        id
    } = ctx.request.body
    let list = []
    list = await service.deleteFunc(id)
    return success(ctx, list)
}