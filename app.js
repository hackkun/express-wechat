const express = require('express')
const routes = require('./routes')

const app = express()

// ejs模板
app.set('view engine', 'ejs')

// 静态文件
app.use(express.static('./public'))

// 路由
routes(app)

// 监听端口
app.listen(1234)