const Koa = require('koa');

const app = new Koa();

console.log(app);

// Logger
app.use(async (ctx, next) => {
  console.log(1);

  await next();

  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} : ${rt}`);

  console.log(6);
});

// X-Response-Time
app.use(async (ctx, next) => {
  console.log(2);

  const start = Date.now();

  await next();

  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);

  console.log(5);
});

// Response
app.use(async (ctx) => {
  console.log(3);

  ctx.body = 'Hello World!';

  console.log(4);
});

app.listen(3000);
