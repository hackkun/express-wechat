const express = require('express')
const app = express()
const wechat = require('wechat')
const msg = require('./wechat/robot-message')
const config = require('./wechat/config')
const index = require('./routes/index')

// ejs模板
app.set('view engine', 'ejs')

// 静态文件
app.use(express.static('./public'))

// 微信签名认证
app.use(msg.robotMessage)

// 404错误
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// 404错误处理
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.listen(1234)