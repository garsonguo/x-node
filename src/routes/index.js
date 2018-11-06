import KoaRouter from 'koa-router'
import api from '../api/index.js'

const router = new KoaRouter()

router.get('/userManage/user/login', api.userManage.user.login)
    .get('/userManage/user/getToken', api.userManage.user.getToken)
    .post('/userManage/user/registered', api.userManage.user.registered)
    .get('/userManage/user/queryUserList', api.userManage.user.queryUserList)
    .post('/userManage/user/deleteUser', api.userManage.user.deleteUser)
    .post('/userManage/user/editUser', api.userManage.user.editUser)

module.exports = router