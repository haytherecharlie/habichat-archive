import { verifyToken } from 'lib/jsonwebtoken/jsonwebtoken'

const authorizeRequest = async (req, res, next) => {
  try {
    const basePath = req.url.split('/')[1]
    const { token } = req.headers
    switch (basePath) {
      case 'admin':
        return await _authorizeRequest(token, 'admin', next)
      case 'app':
        return await _authorizeRequest(token, 'app', next)
      case 'auth':
        return await _authorizeRequest(token, 'auth', next)
      default:
        throw { code: 404, message: 'Route not found' }
    }
  } catch (err) {
    return res.status(err.code).send(err.message)
  }
}

const _authorizeRequest = async (token, type, next) => {
  try {
    await verifyToken(token, type)
    return next()
  } catch (err) {
    throw { code: 401, message: `Invalid ${type} token.` }
  }
}

export default authorizeRequest
