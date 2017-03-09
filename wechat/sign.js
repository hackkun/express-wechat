const sha1 = require('sha1')

// 获取微信调试
module.exports = opts => {
  return (req, res, next) => {
    const q = req.query,
      token = opts.token,  // token
      signature = q.signature,  // 微信加密签名  
      nonce = q.nonce,  // 随机数
      timestamp = q.timestamp,  // 时间戳
      echostr = q.echostr  // 随机字符串  

    /**
     * 将token、timestamp、nonce三个参数进行字典序排序 
     * 将三个参数字符串拼接成一个字符串进行sha1加密 
     * 开发者获得加密后的字符串可与signature对比，标识该请求来源于微信 
     */
    const str = [token, timestamp, nonce].sort().join(''),
      sha = sha1(str)

    if (sha === signature) {
      res.send(echostr + '')
    } else {
      res.send('err')
    }
  }
}