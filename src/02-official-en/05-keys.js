const Koa = require('koa');

const app = new Koa();

app.keys = [
  'OEK5zjaAMPc3L6iK7PyUjCOziUH3rsrMKB9u8H07La1SkfwtuBoDnHaaPCkG5Brg',
  'MNKeIebviQnCPo38ufHcSfw3FFv8EtnAe1xE02xkN1wkCV1B2z126U44yk2BQVK7',
];

app.use(async (ctx) => {
  ctx.cookies.set('name', 'HM', { signed: true });
  ctx.body = 'Koa Keys';
});

app.listen(3000);
