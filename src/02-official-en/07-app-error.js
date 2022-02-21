const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  ctx.cusErr = 'Error Code (3000) ';
  throw new Error('3000');
});

app.on('error', (err, ctx) => {
  console.log(`On Error:${err.message}, ${ctx.cusErr}`);
});

app.listen(3000);
