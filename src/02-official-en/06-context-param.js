const Koa = require('koa');

const app = new Koa();

app.context.param = '1111';

app.use(async (ctx) => {
  ctx.body = ctx.param;
});

app.listen(3000);
