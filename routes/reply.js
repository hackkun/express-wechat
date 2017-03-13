const wechat = require('wechat')
const WechatAPI = require('wechat-api')
const express = require('express')
const path = require('path')
const router = express.Router()
const config = require('../config/config')
const api = new WechatAPI(config.appid, config.appsecret)

router.all('/wechat', wechat(config).text((message, req, res, next) => {
  const content = message.Content || '';
  res.reply([
    { title: '黑客帝国', description: '好看的电影', picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489385650883&di=c799e0f7ccbf1e1ee456d299601c08a5&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F574e9258d109b3de7d2c6e0dcabf6c81810a4cc0.jpg', url: 'http://express-wechat.tunnel.2bdata.com/movie/' + '黑客帝国' },
    { title: '黑客帝国', description: '好看的电影', picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489385650883&di=c799e0f7ccbf1e1ee456d299601c08a5&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F574e9258d109b3de7d2c6e0dcabf6c81810a4cc0.jpg', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489385650883&di=c799e0f7ccbf1e1ee456d299601c08a5&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F574e9258d109b3de7d2c6e0dcabf6c81810a4cc0.jpg' },
    { title: '黑客帝国', description: '好看的电影', picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489385650883&di=c799e0f7ccbf1e1ee456d299601c08a5&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F574e9258d109b3de7d2c6e0dcabf6c81810a4cc0.jpg', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489385650883&di=c799e0f7ccbf1e1ee456d299601c08a5&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F574e9258d109b3de7d2c6e0dcabf6c81810a4cc0.jpg' }
  ])
}).image((message, req, res, next) => {
  api.uploadMedia(path.join(__dirname, '../public/img/node.png'), 'image', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(result)
  })
  res.reply('图已收到');
}).voice((message, req, res, next) => {
  res.reply('语音已收到');
}).video((message, req, res, next) => {
  res.reply('视频已收到');
}).location((message, req, res, next) => {
  res.reply('地理位置已收到');
}).link((message, req, res, next) => {
  res.reply('链接已收到');
}).event((message, req, res, next) => {
  switch (message.Event) {
    case 'subscribe':
      var openid = message.FromUserName
      res.reply('欢迎关注一介布衣公众号')
      break
    case 'unsubscribe':
      var openid = message.FromUserName
      res.reply('亲,请不要离开我!!')
      break
    case 'CLICK':
      const key = message.EventKey
      if (key === 'movie_hot') {
        res.reply([
          { title: '黑客帝国', description: '好看的电影', picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489385650883&di=c799e0f7ccbf1e1ee456d299601c08a5&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F574e9258d109b3de7d2c6e0dcabf6c81810a4cc0.jpg', url: 'http://express-wechat.tunnel.2bdata.com/movie/' + '黑客帝国' },
          { title: '黑客帝国', description: '好看的电影', picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489385650883&di=c799e0f7ccbf1e1ee456d299601c08a5&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F574e9258d109b3de7d2c6e0dcabf6c81810a4cc0.jpg', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489385650883&di=c799e0f7ccbf1e1ee456d299601c08a5&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F574e9258d109b3de7d2c6e0dcabf6c81810a4cc0.jpg' },
          { title: '', description: '好看的电影', picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489385650883&di=c799e0f7ccbf1e1ee456d299601c08a5&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F574e9258d109b3de7d2c6e0dcabf6c81810a4cc0.jpg', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489385650883&di=c799e0f7ccbf1e1ee456d299601c08a5&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F574e9258d109b3de7d2c6e0dcabf6c81810a4cc0.jpg' }
        ])
      } else if (key === 'movie_comment') {
        res.reply([
          { title: '蝙蝠侠', description: '好看的电影', picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489385650883&di=c799e0f7ccbf1e1ee456d299601c08a5&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F574e9258d109b3de7d2c6e0dcabf6c81810a4cc0.jpg', url: 'http://express-wechat.tunnel.2bdata.com/movie/' + '黑客帝国' },
          { title: '黑客帝国', description: '好看的电影', picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489385650883&di=c799e0f7ccbf1e1ee456d299601c08a5&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F574e9258d109b3de7d2c6e0dcabf6c81810a4cc0.jpg', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489385650883&di=c799e0f7ccbf1e1ee456d299601c08a5&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F574e9258d109b3de7d2c6e0dcabf6c81810a4cc0.jpg' },
        ])
      } else if (key === 'movie_classics') {
        res.reply([
          { title: '一次别离', description: '好看的电影', picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489385650883&di=c799e0f7ccbf1e1ee456d299601c08a5&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F574e9258d109b3de7d2c6e0dcabf6c81810a4cc0.jpg', url: 'http://express-wechat.tunnel.2bdata.com/movie/' + '一次别离' }
        ])
      }
      break
    default:
      res.send('')
  }
}).device_text((message, req, res, next) => {
  res.reply('设备消息已收到');
}).device_event((message, req, res, next) => {
  res.reply('设备事件已收到');
}).middlewarify())

module.exports = router