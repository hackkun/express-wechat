const $http = require('superagent')
const fs = require('fs')
const config = require('./config')
const API_ACCESS_TOKEN = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential'

// 获取token
function getAccessToken() {
  console.log('get')
  return new Promise((resolve, reject) => {
    $http('GET', `${API_ACCESS_TOKEN}&appid=${config.appid}&secret=${config.appsecret}`).end((req, res) => {
      if (res.body) {
        resolve(res.body)
      }
      console.log(res)
    })
  })
}

// 储存access_token
function saveAccessToken() {
  console.log('save')
  getAccessToken().then(res => {
    console.log(res)
    const token = res['access_token']
    console.log(res)
    fs.writeFile('./wechat/access-token.txt', token, (err) => {

    })
  })
}

// 定期刷新获取access_token
function refreshAccessToken() {
  console.log('refresh')
  saveAccessToken()
  setInterval(() => {
    saveAccessToken()
  }, 7000 * 1000)
}

module.exports = refreshAccessToken