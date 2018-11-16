import model from '../../models/baseModel'
const context = 'user'

module.exports = {
    getUserByUserAndPwd: async (name, pwd) => {
        let db = await model.init(context)
        let user = db.find({
            name: name,
            password: pwd
        }).value()
        return user
    },
    registered: async (user) => {
        let db = await model.init(context)
        let userInfo = db.insert(user).write()
        return userInfo
    },
    queryUserList: async (params) => {
        let db = await model.init(context)
        let userList, list, count, type
        let start = params.currentPage - 1 >= 0 ? (params.currentPage - 1) * params.pageSize : 0
        let end = params.currentPage * params.pageSize
        if (params.filter !== "{}") {
            let filter = JSON.parse(params.filter)
            list = db.filter(filter).value()
        } else {
            list = db.value()
        }

        let listSlice = list.slice(start, end)
        userList = {
            count: count,
            list: listSlice
        }
        return userList
    },
    deleteUser: async (params) => {
        let db = await model.init(context)
        let result = db.removeById(params).write()
        return result
    },
    editUser: async (params) => {
        let db = await model.init(context)
        let result = db.updateById(params.id, params).write()
    }
}