const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  // Unsupported
  // ctx.response.statusCode = 500;

  console.log('app', ctx.app);
  console.log('req', ctx.request);
  console.log('res', ctx.response);

  ctx.body = 'Koa Context';

  // Error - 1
  // ctx.throw(400, 'Params Required');

  // Error - 2
  const err = new Error('Params Required');
  err.status = 400;
  err.expose = true;
  throw err;
});

app.listen(3000);
