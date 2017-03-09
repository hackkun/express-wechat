const $http = require('superagent')
const fs = require('fs')
const API_ACCESS_TOKEN = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential'

var data = {}

module.exports = opts => {
  return (req, res, next) => {
    if (isVaildAccessToken(data)) {
      return
    } else {
      getAccessToken(opts)
    }

    next()

  }
}

// 获取token
function getAccessToken(opts) {
  $http('GET', `${API_ACCESS_TOKEN}&appid=${opts.appid}&secret=${opts.appsecret}`).end((req, res) => {
    console.log(res.body)
    data.accessToken = res.body['access_token']
    data.expiresIn = res.body['expires_in']
    data.time = new Date().getTime()
    // 储存access_token
    fs.writeFile('./wechat/access-token.txt', res.body['access_token'], (err) => {
      
    })
  })
}

// 验证是否存在或过期
function isVaildAccessToken(data) {
  if (!data.accessToken) {
    return false
  } else {
    return true
  }
  const now = new Date().getTime()
  if ((now - data.time + 20) / 1000 < data.expiresIn) {
    return true
  } else {
    return false
  }
}