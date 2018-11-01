import model from '../models/baseModel'
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
        let userList
        if (params.currentPage && params.pageSize) {
            let start = params.currentPage - 1 >= 0 ? (params.currentPage - 1) * params.pageSize : 0
            let end = params.currentPage * params.pageSize
            let list = db.value()
            let count = list.length
            let listSlice = list.slice(start, end)
            userList = {
                count: count,
                list: listSlice
            }
        } else {
            let list = db.find(params).value()
            let count = list.length
            userList = {
                count: count,
                list: list
            }
        }
        if (userList.count === 1) {
            let list = [userList]
            let count = list.length
            userList = {
                count: count,
                list: list
            }
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