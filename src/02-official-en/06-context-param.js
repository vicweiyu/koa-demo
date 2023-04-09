const Koa = require('koa');

const app = new Koa();

app.context.globalParam = {
  p: 1111,
  f: () => 'func',
};

app.use(async (ctx) => {
  const { p, f } = ctx.globalParam;

  ctx.body = `${p} ${f()}`;
});

app.listen(3000);
