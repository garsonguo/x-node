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
    },
    queryMenuByUserName: async (name) => {
        let udb = await model.init("user")
        let db = await model.init('roleUser')
        let adb = await model.init('access')
        let mdb = await model.init('menu')
        let user = udb.find({
            name: name
        }).value()
        let idParams = {
            userId: user.id
        }
        let roleUser = db.filter(idParams).value()
        let roleArray = []
        roleUser.forEach(item => {
            roleArray.push(item.roleId)
        })
        let menuArray = []
        roleArray.forEach(item => {
            let roleId = {
                roleId: item
            }
            let access = adb.filter(roleId).value()
            access.forEach(item => {
                menuArray.push(item.menuId)
            })
        })
        let result = []
        menuArray.forEach(item => {
            let menuId = {
                id: item
            }
            let menu = mdb.filter(menuId).value()
            result = result.concat(menu)
        })
        return result
    }
}