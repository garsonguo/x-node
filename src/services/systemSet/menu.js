import model from '../../models/baseModel'
const context = 'menu'

module.exports = {
    add: async (func) => {
        let db = await model.init(context)
        let info = db.insert(func).write()
        return info
    },
    queryList: async () => {
        let db = await model.init(context)
        let list = db.value()
        return list
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