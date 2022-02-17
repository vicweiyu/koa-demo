const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  ctx.respond = false;

  const res = ctx.res;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Koa Context Respond');
});

app.listen(3000);
