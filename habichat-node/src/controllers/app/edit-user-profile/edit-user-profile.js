import { updateUser } from 'lib/mongo/selectors/user/user'
import { signToken, decodeToken } from 'lib/jsonwebtoken/jsonwebtoken'

export const POST = async (req, res) => {
  try {
    const { email } = await decodeToken(req.headers.token)
    const newUser = await updateUser(email, req.body)
    const token = await signToken(newUser, 'app')
    return res.status(200).json({ token })
  } catch (err) {
    res.status(err.code).send(err.message)
  }
}
