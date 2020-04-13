import { validateEmail } from 'lib/regex/regex'
import { signToken } from 'lib/jsonwebtoken/jsonwebtoken'
import { findVerificationPin, deleteVerificationPin } from 'lib/mongo/selectors/verification-pin/verification-pin'
import { findUser, saveNewUser, updateUser } from 'lib/mongo/selectors/user/user'

export const GET = async (req, res) => {
  try {
    const { pin } = req.params
    const email = validateEmail(req.params.email)
    const dbPin = await findVerificationPin(email)
    if (dbPin === pin) {
      const existing = await findUser(email)
      existing ? await updateUser(email, { userLastLogin: new Date().getTime() }) : await saveNewUser(email)
      const user = await findUser(email)
      await deleteVerificationPin(email)
      const token = await signToken(user, 'app')
      return res.status(200).send({ token })
    }
    throw { code: 401, message: 'Invalid Pin' }
  } catch (err) {
    res.status(err.code).send(err.message)
  }
}
