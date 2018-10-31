import model from '../models/baseModel'

module.exports = {
    getUserByUserAndPwd: async (name, pwd) => {
        const context = 'user'
        let db = await model.init(context)
        let user = db.find({
            name: name,
            password: pwd
        }).value()
        return user
    },
    registered: async (user) => {
        const context = 'user'
        let db = await model.init(context)
        let userInfo = db.insert(user).write()
        return userInfo
    }
}