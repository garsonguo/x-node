import model from '../../models/baseModel'
const context = 'function'

module.exports = {
    add: async (func) => {
        let db = await model.init(context)
        let functionInfo = db.insert(func).write()
        return functionInfo
    },
    queryList: async (params) => {
        let db = await model.init(context)
        let functionList, list, count, type
        let start = params.currentPage - 1 >= 0 ? (params.currentPage - 1) * params.pageSize : 0
        let end = params.currentPage * params.pageSize
        if (params.filter !== "{}") {
            let filter = JSON.parse(params.filter)
            list = db.filter(filter).value()
            count = list.length
        } else {
            list = db.value()
            count = list.length
        }
        let listSlice = list.slice(start, end)
        functionList = {
            count: count,
            list: listSlice
        }
        return functionList
    },
    deleteFunc: async (params) => {
        let db = await model.init(context)
        let result = db.removeById(params).write()
        return result
    },
    edit: async (params) => {
        let db = await model.init(context)
        let result = db.updateById(params.id, params).write()
        return result
    }
}