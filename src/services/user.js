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
        if (JSON.stringify(params) == "{}") {
            userList = db.value()
        } else {
            userList = db.find(params).value()
        }
        return userList
    }
}