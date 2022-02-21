const fs = require('fs');
const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
  await next();

  // console.log(typeof ctx.body);
  // ctx.assert.equal('object', typeof ctx.body, 500, 'Response is a Object');
  // ctx.assert(!(typeof ctx.body === 'object'), 500, 'Response is a Object');
});

app.use(async (ctx) => {
  const response = ctx.response;

  // response.status = 200;
  // ctx.status = 200;

  // ctx.body = 'Koa Response';
  // ctx.body = null;
  ctx.body = { a: 1, b: 2 };
  // ctx.body = fs.readFileSync(__dirname + '/index.html', 'utf-8');

  console.log('message:', response.message);
  console.log('length:', response.length);
  console.log('Content-Type:', response.get('Content-Type'), response.has('Content-Type'));
  response.set('Cache-Control', 'no-cache');
  console.log('Cache-Control:', response.get('Cache-Control'), response.has('Cache-Control'));

  response.append('Link', '<http://127.0.0.1/>');
  ctx.set({
    'Etag': '1111',
    'Last-Modified': new Date(),
  });
  // response.remove('Etag');

  console.log('type:', response.type);
  console.log('is:', response.is('json'));

  // ctx.redirect('http://google.com');

  console.log('headerSent', response.headerSent);
  console.log('lastModified', response.lastModified);
});

app.listen(3000);
