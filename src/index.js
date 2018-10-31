import Koa from 'koa'
import koaBody from 'koa-body'
import koaStatic from 'koa-static2'
import koaCORS from 'koa2-cors'
import router from './routes/index'
import path from 'path'

const app = new Koa()

app.use(koaCORS({
    origin: function (ctx) {
        if (ctx.url === '/test') {
            return "*"; // 允许来自所有域名请求
        }
        return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

app.use(koaStatic('assets', path.resolve(__dirname, '../assets')))

app.use(koaBody({
        multipart: true, // 支持文件上传
        strict: false, // 严格模式下，启用后不解析GET HEAD DELETE请求
        formidable: { // 配置更多的关于 multipart 的选项
            uploadDir: path.join(__dirname, '../assets/uploads/tmp') // 文件上传的文件夹
        },
        jsonLimit: '10mb', // 限制请求体的大小
        formLimit: '10mb',
        textLimit: '10mb'
    }))
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)