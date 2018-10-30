import path from 'path'
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const dbPath = path.resolve(__dirname, '../db/db.json')
const lodashId = require('lodash-id')

const adapter = new FileSync(dbPath)

let instance

module.exports = {
    init: function (context) {
        return new Promise((resolve, reject) => {
            if (instance === undefined) {
                const db = low(adapter)
                db._.mixin(lodashId)
                instance = db
                const hasDB = db.has(context).value()
                if (hasDB) {
                    resolve(db.get(context))
                } else {
                    reject('没有相关数据库')
                }
            } else {
                resolve(instance.get(context))
            }
        })
    }
}