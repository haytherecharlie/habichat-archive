import jsonwebtoken from 'jsonwebtoken'
const authSecret = 'Pv0b5AVpYi8g@uzE6k@iDucykkPrsGsD5&1e0PDO#9Tc@Vf#@I0F7liw8Et@CA73uiVc2e4a*9H9@YIn1ncmyd6%b@ZzIdiGDuM'

const authorizeRequest = async (req, res, next) => {
  try {
    const { token } = req.headers
    await jsonwebtoken.verify(token, authSecret, { ignoreExpiration: true })
    return next()
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

export default authorizeRequest
