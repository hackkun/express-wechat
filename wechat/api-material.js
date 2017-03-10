const util = require('../config/util')
const path = require('path')
const $http = require('superagent')

const fpath = path.join(__dirname, './access-token.txt')

let access_token = null
util.readFileAsync(fpath).then(data => {
  access_token = data
})

// 新增素材
exports.create = (type, media, cb) => {
  console.log(type, media)
  const url = `https://api.weixin.qq.com/cgi-bin/media/upload?access_token=${access_token}&type=${type}`
  $http.post(url)
    .send({ formData: media })
    .end((req, res) => {
      cb(req, res)
    })
}