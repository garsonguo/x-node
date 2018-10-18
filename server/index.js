const Koa = require('Koa')
const app = new Koa()

app.use(async (ctx, next) => {
    ctx.body = 'hi'
})

app.listen(3000)