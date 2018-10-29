import KoaRouter from 'koa-router'
import api from '../api/index.js'

const router = new KoaRouter()

router.post('/auth/login', api.auth.login)
    .get('/auth/getToken', api.auth.getToken)

module.exports = router