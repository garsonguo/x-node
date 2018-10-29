export let Get = (ctx) => {
    ctx.body = {
        result: 'get',
        name: ctx.params.name,
        para: ctx.query
    }
}

export let Post = (ctx) => {
    ctx.body = {
        result: 'post',
        name: ctx.params.name,
        para: ctx.request.body
    }
}