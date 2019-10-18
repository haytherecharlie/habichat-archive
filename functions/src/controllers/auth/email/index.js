import { getUserDocId, setUserDoc, setVerifyDoc } from 'services/firebase'
import { sendVerificationEmail } from 'utils/nodemailer'
import createNewUser from 'utils/createNewUser'
import createNewCode from 'utils/createNewCode'

const emailController = async (req, res) => {
  try {
    const { email } = req.body
    let userId = await getUserDocId(email)
    if (!userId) userId = await setUserDoc(createNewUser(email))
    const newCode = createNewCode()
    await sendVerificationEmail(email, newCode)
    await setVerifyDoc(userId, email, newCode)
    return res.sendStatus(200)
  } catch (err) {
    return res.status(400).send(err.message)
  }
}

export default emailController
