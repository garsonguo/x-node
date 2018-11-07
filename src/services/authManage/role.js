import model from '../../models/baseModel'
const context = 'role'

module.exports = {
    add: async (func) => {
        let db = await model.init(context)
        let info = db.insert(func).write()
        return info
    },
    queryList: async (params) => {
        let db = await model.init(context)
        let result, list, count, type
        let start = params.currentPage - 1 >= 0 ? (params.currentPage - 1) * params.pageSize : 0
        let end = params.currentPage * params.pageSize
        if (params.filter !== "{}") {
            let filter = JSON.parse(params.filter)
            list = db.find(filter).value()
            count = list.length
            type = Object.prototype.toString.call(list)
        } else {
            list = db.value()
            count = list.length
            type = Object.prototype.toString.call(list)
        }
        if (type === "[object Undefined]") {
            list = []
        }
        if (type === "[object Object]") {
            list = [list]
        }
        let listSlice = list.slice(start, end)
        result = {
            count: count,
            list: listSlice
        }
        return result
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