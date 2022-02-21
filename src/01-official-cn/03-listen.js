const http = require('http');
const https = require('https');
const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello World!';
});

app.on('error', (err, ctx) => {
  log.error('server Error', err, ctx);
});

http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);
