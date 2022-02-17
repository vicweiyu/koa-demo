const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  const request = ctx.request;

  console.log(request);

  console.log('**********');
  console.log(request.querystring);
  console.log(request.ip);
  console.log('**********');
});

app.listen(3000);
