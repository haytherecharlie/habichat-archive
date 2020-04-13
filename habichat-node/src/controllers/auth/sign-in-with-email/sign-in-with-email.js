import { validateEmail } from 'lib/regex/regex'
import { signToken } from 'lib/jsonwebtoken/jsonwebtoken'
import { generatePin } from 'lib/four-digit-pin/four-digit-pin'
import { sendVerificationEmail } from 'lib/nodemailer/nodemailer'
import { updateVerificationPin } from 'lib/mongo/selectors/verification-pin/verification-pin'

export const GET = async (req, res) => {
  try {
    const email = validateEmail(req.params.email)
    const pin = generatePin()
    await updateVerificationPin(email, pin)
    await sendVerificationEmail(email, pin)
    const token = await signToken({ email }, 'auth')
    res.status(200).json({ token })
  } catch (err) {
    res.status(500).send(err.message)
  }
}
