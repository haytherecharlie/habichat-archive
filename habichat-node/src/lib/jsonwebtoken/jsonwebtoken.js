import jsonwebtoken from 'jsonwebtoken'
import config from 'config'

const { secret, signOptions, verifyOptions } = config.jwt
export const signToken = async (object, type) => {
  try {
    return await jsonwebtoken.sign(object, secret[type], signOptions)
  } catch (err) {
    throw { code: 500, message: `Failed to sign ${type} token` }
  }
}

export const verifyToken = async (token, type) => {
  try {
    return await jsonwebtoken.verify(token, secret[type], verifyOptions)
  } catch (err) {
    throw { code: 500, message: `Failed to verify ${type} token` }
  }
}

export const decodeToken = async token => {
  try {
    return await jsonwebtoken.decode(token)
  } catch (err) {
    throw { code: 500, message: `Failed to decode token` }
  }
}
