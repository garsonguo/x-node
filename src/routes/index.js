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

    .post('/authManage/role/add', api.authManage.role.add)
    .get('/authManage/role/queryList', api.authManage.role.queryList)
    .post('/authManage/role/delete', api.authManage.role.deleteFunc)
    .post('/authManage/role/edit', api.authManage.role.edit)
    .post('/authManage/role/roleAddUser', api.authManage.role.roleAddUser)
    .get('/authManage/role/queryRoleUser', api.authManage.role.queryRoleUser)
    .get('/authManage/role/queryUserRole', api.authManage.role.queryUserRole)
    .post('/authManage/role/deleteRoleUser', api.authManage.role.deleteRoleUser)
    .post('/authManage/role/addAccess', api.authManage.role.addAccess)
    .get('/authManage/role/queryAccessList', api.authManage.role.queryAccessList)

    .post('/systemSet/menu/add', api.systemSet.menu.add)
    .post('/systemSet/menu/delete', api.systemSet.menu.deleteMenu)
    .post('/systemSet/menu/edit', api.systemSet.menu.edit)
    .get('/systemSet/menu/queryList', api.systemSet.menu.queryList)

module.exports = router