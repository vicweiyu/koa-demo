const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  const request = ctx.request;
  console.log(request);

  console.log('length:', request.length);
  console.log('originalUrl:', request.originalUrl);
  console.log('origin:', request.origin);
  console.log('href:', request.href);
  console.log('path:', request.path);
  console.log('querystring:', request.querystring);
  console.log('host:', request.host);
  console.log('hostname:', request.hostname);
  console.log('URL:', request.URL);
  console.log('type:', request.type);
  console.log('charset:', request.charset);
  console.log('query:', JSON.stringify(request.query));
  console.log('fresh:', request.fresh);
  console.log('stale:', request.stale);
  console.log('protocol:', request.protocol);
  console.log('secure:', request.secure);
  console.log('ip:', request.ip);
  console.log('ips:', request.ips);
  console.log('subdomains:', request.subdomains);
  console.log('is:', request.is(['html']));

  console.log('accepts:', request.accepts());
  console.log('accepts:', request.accepts('text/html', 'application/xml'));
  console.log('acceptsEncodings:', request.acceptsEncodings());
  console.log('acceptsCharsets:', request.acceptsCharsets());
  console.log('acceptsLanguages:', request.acceptsLanguages());

  console.log('idempotent:', request.idempotent);
  // console.log('socket:', request.socket);
  console.log('Connection:', request.get('Connection'));

  ctx.body = 'Koa Request';
});

app.listen(3000);
