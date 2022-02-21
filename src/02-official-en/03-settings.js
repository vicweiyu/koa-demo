const Koa = require('koa');

const app = new Koa({ subdomainOffset: 3 });

app.env = 'production';

console.log(app);

app.listen(3000);
