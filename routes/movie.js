const WechatAPI = require('wechat-api')
const express = require('express')
const router = express.Router()
const config = require('../config/config')

router.get('/movie', (req, res) => {
  const api = new WechatAPI(config.appid, config.appsecret)
  const param = {
    debug: true,
    jsApiList: ['startRecord', 'onMenuShareTimeline', 'onMenuShareAppMessage'],
    url: 'http://express-wechat.tunnel.2bdata.com/movie'
  }
  api.getJsConfig(param, (err, result) => {
    console.log(result)
    res.render('movie', {
      debug: result.debug,
      appId: result.appId,
      timestamp: result.timestamp,
      nonceStr: result.nonceStr,
      signature: result.signature
      // jsApiList: result.jsApiList
    })
  })
})

router.get('/movie/:id', (req, res) => {
  res.render('movie-detail', {
    id: req.params.id
  })
})

module.exports = router