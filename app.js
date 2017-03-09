const express = require('express')
const app = express()

const config = {  // 微信的配置文件
  appid: 'wx7b0fd0b70bc00a22',
  appsecret: 'bc4cdee548c06f781211bf6a1f7440aa',
  token: 'woewj434sdjf'
  // getAccessToken: () => {
  //   return util.readFileAsync(access_token_file)
  // },
  // setAccessToken: data => {
  //   data = JSON.stringify(data)
  //   return util.writeFileAsync(access_token_file, data)
  // }
}

// 引入路由配置
const wechat = require('./wechat/sign')
const accessToken = require('./wechat/access-token')
const index = require('./routes/index')

// ejs模板
app.set('view engine', 'ejs')

// 静态文件
app.use(express.static('./public'))

// 微信签名认证
// app.use(accessToken(config))
app.use(wechat(config))

// 路由
app.use('/', index)

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
  res.status(err.status || 500);
  res.render('error')
})

app.listen(1234)