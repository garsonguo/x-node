import KoaRouter from 'koa-router'
import api from '../api/index.js'

const router = new KoaRouter()

router.get('/auth/login', api.auth.login)
    .get('/auth/getToken', api.auth.getToken)
    .post('/auth/registered', api.auth.registered)
    .get('/auth/queryUserList', api.auth.queryUserList)

module.exports = router