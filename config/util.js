const fs = require('fs')

// 读取文件
exports.readFileAsync = (fpath, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fpath, encoding, (err, result) => {
      if (err) reject(err)
      else resolve(result)
    })
  })
}

// 写入文件
exports.writeFileAsync = (fpath, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fpath, content, (err, result) => {
      if (err) reject(err)
      else resolve()
    })
  })
}