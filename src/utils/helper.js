const jwt = require('jsonwebtoken')

const generateAccessToken = (payload = {}, time = '7d') => {
  return jwt.sign(payload, "cc", { expiresIn: time })
}

module.exports = {generateAccessToken}