import { port, staticPath } from './config'
import Koa from 'koa'
import Logger from 'koa-logger'
import Static from 'koa-static'

let app = new Koa()

app
  .use(Logger())
  .use(Static(staticPath))
  .listen(port)

console.log('服务已启动', '地址:', 'http://localhost:' + port)

export default app
