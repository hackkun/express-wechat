const wechat = require('./wechat')
const movie = require('./movie')
const error = require('./404')

module.exports = app => {
  
  app.get('/', (req, res) => {  // index
    res.render('index', {
      title: 'wechat'
    })
  })
  app.use(wechat)
  app.use(movie)
  app.use(error)

}