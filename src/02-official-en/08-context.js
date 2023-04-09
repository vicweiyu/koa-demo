const http = require('http');

const Koa = require('koa');

const app = new Koa();

let reqCount = 0;

app.on('log', (p, ...others) => {
  console.log('In Log:', p);
});

app.use(async (ctx) => {
  reqCount++;

  const nodeReq = ctx.req;
  const nodeRes = ctx.res;
  const koaReq = ctx.request;
  const koaRes = ctx.response;

  // console.log(nodeReq);
  // console.log(nodeRes);
  // console.log(koaReq);
  // console.log(koaRes);

  // Unsupported
  // nodeRes.statusCode = 404;

  console.log(ctx.app);

  ctx.app.emit('log', reqCount);

  ctx.body = 'Koa Context';

  console.log('ctx.status: ' + ctx.status);

  // Way 1
  /*
  ctx.throw(400, 'Input Error');
  */
  // Way 2
  /*
  const err = new Error('Input Error');
  err.status = 400;
  err.expose = true;
  throw err;
  */

  ctx.assert(false, 400, 'Cannot Access');
});

app.listen(3000);
