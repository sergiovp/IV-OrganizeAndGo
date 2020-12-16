const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const PORT = process.env.PORT || 2727;
const router = require('./routes/routes');

const app = new Koa();

app.use(bodyParser());

/**
 * MIDDLEWARE PARA ERRORES
 */
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = {
            Error: err.message
        };
    }
})

/**
 * MIDDLEWARE PARA LOS LOGS
 */
app.use(async (ctx, next) => {
    console.log(`${ctx.method} ${ctx.url} ${new Date()}`);
    return await next();
});

app.use(router.routes());

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});
