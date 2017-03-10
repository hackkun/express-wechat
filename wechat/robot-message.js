const wechat = require('wechat')
const config = require('./config')
const util = require('../config/util')
const fs = require('fs')
const path = require('path')
const apiMaterial = require('./api-material')
const apiGetAccessToken = require('./api-access-token')

exports.robotMessage = wechat(config, (req, res, next) => {
  const message = req.weixin
  if (message && message.MsgType == 'text') {
    var text = ''
    var description = ''
    switch (message.Content) {
      case '关键词1':
        res.reply({
          content: 'hello world!',
          type: 'text'
        })
        break
      case '2':
        text = '你好吗'
        description = message.ToUserName + '----' + message.FromUserName
        console.log(__dirname + '../public/img/node.png')
        apiMaterial.create('image', '../public/img/node.png', function (req, res) {
          console.log(res.text, res.body)
        })

        res.reply([
          {
            title: text,
            description: description,
            picurl: 'http://www.baidu.com',
            url: 'http://www.baidu.com'
          }
        ])
        break
      default:    //默认回复文本消息
        res.reply({
          content: '消息已收到',
          type: 'text'
        })
        break
    }
  } else if (message && message.Event) {
    switch (message.Event) {
      case 'subscribe':
        res.reply({
          content: '关注事件',
          type: 'text'
        })
        break
      case 'unsubscribe':    //取消关注
        break
      default:
        res.reply({
          content: 'O(∩_∩)O~',
          type: 'text'
        })
        break
    }
  }
})
