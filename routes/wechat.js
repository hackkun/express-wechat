const express = require('express')
const router = express.Router()
const wechat = require('wechat')
const def = require('../config/def')

const config = {
  token: def.TOKEN,
  appsecret: def.APPSECRET,
  appid: def.APPID,
  encodingAESKey: ''
}

router.use(express.query())
router.use('/', wechat(config).text(function (message, req, res, next) {
  res.reply('你好，文字')
}).image(function (message, req, res, next) {
  res.reply('你好，图片')
}).voice(function (message, req, res, next) {
  res.reply('你好，声音')
}).video(function (message, req, res, next) {
  res.reply('你好，视频')
}).location(function (message, req, res, next) {
  res.reply('你好，定位')
}).link(function (message, req, res, next) {
  res.reply('你好，链接')
}).event(function (message, req, res, next) {
  res.reply('你好')
}).device_text(function (message, req, res, next) {
  res.reply('你好，设备文字')
}).device_event(function (message, req, res, next) {
  res.reply('你好，设备事件')
}).middlewarify())

module.exports = router
