const fs = require('fs')
const path = require('path')

module.exports = function({ tls }, ee) {
  if (!tls) {
    console.warn('#####################################################')
    console.warn('## artillery-plugin-http-ssl was loaded but TLS    ##')
    console.warn('## configuration not found in script configuration ##')
    console.warn('#####################################################')
  } else {
    const condReadAssign = (attr) => {
      if (attr in tls) {
        tls[attr] = fs.readFileSync(tls[attr])
      }
    }
    condReadAssign('cert')
    condReadAssign('key')
    condReadAssign('ca')
  }
  return this
}
