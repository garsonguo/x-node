export let error = (ctx, msg) => {
    ctx.body = {
        statusCode: 500,
        msg: msg,
        result: null
    }
}

export let success = (ctx, data) => {
    ctx.body = {
        statusCode: 200,
        msg: '',
        result: data
    }
}