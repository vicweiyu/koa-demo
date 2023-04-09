const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  ctx.serverError = 'Error Code: 3000';

  throw new Error('3000');
});

app.on('error', (err, ctx) => {
  console.log(`Server Error: ${err.message}, ${ctx.serverError}`);
});

app.listen(3000);
