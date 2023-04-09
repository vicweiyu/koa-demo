const Koa = require('koa');

const app = new Koa();

// Log
app.use(async (ctx, next) => {
  console.log(1);

  await next();

  const rt = ctx.response.get('X-response-time');
  console.log(`Response Time: ${rt}`);

  console.log(6);
});

// X-response-time
app.use(async (ctx, next) => {
  console.log(2);

  const start = Date.now();

  await next();

  const ms = Date.now() - start;

  ctx.set('X-response-time', `${ms}ms`);

  console.log(5);
});

// Response
app.use(async (ctx) => {
  console.log(3);

  ctx.body = 'Hello Koa!';

  console.log(4);
});

app.listen(3000);
