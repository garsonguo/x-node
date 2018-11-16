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
        count = list.length
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
    },
    roleAddUser: async (params) => {
        let db = await model.init('roleUser')
        let result = db.insert(params).write()
        return result
    },
    queryRoleUser: async (roleId) => {
        let db = await model.init('roleUser')
        let filter = {
            "roleId": roleId
        }
        let result = db.find(filter).value()
        let a = result
        return result
    },
    queryUserRole: async (userId) => {
        let db = await model.init('roleUser')
        let filter = {
            "userId": userId
        }
        let result = db.find(filter).value()
        let a = result
        return result
    },
    deleteRoleUser: async (params) => {
        let db = await model.init('roleUser')
        let result = db.removeWhere(params).write()
        return result
    },
    addAccess: async (ids) => {
        let db = await model.init('access')
        let result = []
        ids.forEach(item => {
            let info = db.insert(item).write()
            result.push(info)
        })
        return result
    },
    queryAccessList: async (id) => {
        let db = await model.init('access')
        let filter = {
            "roleId": id
        }
        let result = db.find(filter).value();
        return result
    }
}