const WechatAPI = require('wechat-api')
const reply = require('./reply')
const movie = require('./movie')
const error = require('./404')
const menu = require('./menu')

module.exports = app => {
  app.use(menu)
  app.use(reply)
  app.use(movie)
  app.use(error)
  app.get('/', (req, res) => {  // index
    res.render('index', {
      title: 'wechat'
    })
  })
}