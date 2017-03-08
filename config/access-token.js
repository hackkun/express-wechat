const def = require('../config/def')
const url = def.BASEURL + 'token?grant_type=client_credential'

function Wechat() {
  this.getAccessToken()
    .then(data => {
      try {
        data = JSON.parse(data)
      } catch (e) {
        return this.updateAccessToken()
      }

      if (this.isValidAccessToken(data)) {
        Promise.resolve(data)
      } else {
        return updateAccessToken()
      }
    })
    .then(data => {
      this.access_token = data.access_token
      this.expires_in = data.expires_in

      this.save(AccessToken(data))
    })
}

Wechat.prototype.isValidAccessToken = data => {
  if (!data || !data.access_token || !data.expires_in) return

  const access_token = data.access_token
  const expires_in = data.expires_in
  const now = new Date().getTime()

  if (now < expires_in) {
    return true
  } else {
    return false
  }
}

Wechat.prototype.updateAccessToken = () => {
  const url = BASEURL + '&appid=' + def.APPID + '&secret=' + def.APPSECRET
}