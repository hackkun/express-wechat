const wechat = require('wechat')
const express = require('express')
const router = express.Router()
const config = require('../config/config')

router.all('/wechat', wechat(config).text((message, req, res, next) => {
  var content = message.Content || '';
  if (/help/.test(content) || /帮助/.test(content) || /HELP/.test(content)) {
    res.reply('Hi,小编等你很久了\n输入 帮助 或 help 获取帮助');
  } else if (/里约/.test(content) || /奥运/.test(content) || /奖牌/.test(content) || /2016/.test(content)) {
    res.reply('奥运奖牌');
  } else {
    res.reply('您的反馈已收到,我们会定时回复.');
  }
}).image((message, req, res, next) => {
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
      var openid = message.FromUserName;
      res.reply('欢迎关注一介布衣公众号');
      break;
    case 'unsubscribe':
      var openid = message.FromUserName;
      res.reply('亲,请不要离开我!!');
      break;
    default:
      res.send('');
  }
}).device_text((message, req, res, next) => {
  res.reply('设备消息已收到');
}).device_event((message, req, res, next) => {
  res.reply('设备事件已收到');
}).middlewarify())

module.exports = router