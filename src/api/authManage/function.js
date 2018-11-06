import {
    success,
    error
} from '../../lib/responseTemplate'
import functionService from '../../services/authManage/function'

/** 
 * @description 查询功能列表接口
 */

export const queryList = async (ctx) => {
    let functionList = []
    functionList = await functionService.queryList(ctx.query)
    return success(ctx, functionList)
}
/**
 * @description 新增功能接口
 */
export const add = async (ctx) => {
    let {
        name,
        code,
        description,
        module
    } = ctx.request.body
    let info = {
        name: name,
        code: code,
        description: description,
        module: module
    }
    let result = await functionService.add(info)
    return success(ctx, {
        result
    })
}

/** 
 * @description 编辑用户
 */

export const edit = async (ctx) => {
    let functionList = []
    functionList = await functionService.edit(ctx.request.body)
    return success(ctx, functionList)
}

/** 
 * @description 删除用户
 */

export const deleteFunc = async (ctx) => {
    let {
        id
    } = ctx.request.body
    let functionList = []
    functionList = await functionService.deleteFunc(id)
    return success(ctx, functionList)
}