const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const bodyParser = require('koa-body');
const cors = require('koa-cors');

app
  .use(cors())
  .use(bodyParser())
  .use(router.routes());

app.listen(3000);