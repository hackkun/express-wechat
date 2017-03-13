const express = require('express')
const router = express.Router()
const WechatAPI = require('wechat-api')
const config = require('../config/config')

const menu = {
  "button": [
    {
      "type": "click",
      "name": "热门电影",
      "key": "movie_hot"
    },
    {
      "type": "click",
      "name": "热评电影",
      "key": "movie_comment"
    },
    {
      "type": "click",
      "name": "经典电影",
      "key": "movie_classics"
    }
  ]
}

router.use((req, res, next) => {
  const api = new WechatAPI(config.appid, config.appsecret)
  api.createMenu(menu, (err, result) => {
    next()
  });
})

module.exports = router
