const http = require('http');
const Koa = require('koa');

const app = new Koa();

app
  .use(async (ctx, next) => {
    await next();
    ctx.body = 'HTTP Listen';
  })
  .use(async (ctx) => {
    ctx.set('X-CT', '1111');
  });

http.createServer(app.callback()).listen(3000);

http.createServer(app.callback()).listen(3001);
