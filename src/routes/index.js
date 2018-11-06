import KoaRouter from 'koa-router'
import api from '../api/index.js'

const router = new KoaRouter()

router.get('/userManage/user/login', api.userManage.user.login)
    .get('/userManage/user/getToken', api.userManage.user.getToken)
    .post('/userManage/user/registered', api.userManage.user.registered)
    .get('/userManage/user/queryUserList', api.userManage.user.queryUserList)
    .post('/userManage/user/deleteUser', api.userManage.user.deleteUser)
    .post('/userManage/user/editUser', api.userManage.user.editUser)
    .post('/authManage/function/add', api.authManage.function.add)
    .get('/authManage/function/queryList', api.authManage.function.queryList)
    .post('/authManage/function/delete', api.authManage.function.deleteFunc)
    .post('/authManage/function/edit', api.authManage.function.edit)

module.exports = router