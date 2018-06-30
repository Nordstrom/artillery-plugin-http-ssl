const fs = require('fs')
const path = require('path')

module.exports = ({ tls }, ee) => {
  const condReadAssign = (attr) => {
    if (attr in tls) {
      tls[attr] = fs.readFileSync(tls[attr])
    }
  }
  condReadAssign('cert')
  condReadAssign('key')
  condReadAssign('ca')
  return this
}
