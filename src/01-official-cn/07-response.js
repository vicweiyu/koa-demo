const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  // ctx.body = { name: 'Victor', title: 'Development Lead' };
  // ctx.set('Cache-Control', 'no-cache');
  ctx.redirect('https://www.google.com');

  const response = ctx.response;
  console.log(response);

  console.log(JSON.stringify(response.header));
});

app.listen(3000);
