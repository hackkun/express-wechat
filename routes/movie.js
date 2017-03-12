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
    res.render('movie', {
      debug: true,
      appId: result.appId,
      timestamp: result.timestamp,
      nonceStr: result.nonceStr,
      signature: result.signature,
      jsApiList: result.jsApiList
    })
  })
})

module.exports = router