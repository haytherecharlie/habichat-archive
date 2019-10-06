import { getVerifyDoc, getCustomToken, deleteVerifyDoc } from 'services/firebase'

const verifyController = async (req, res) => {
  try {
    const { code: codeAttempt, email } = req.body
    const { code, id } = await getVerifyDoc(email)
    if (code === codeAttempt) {
      const token = await getCustomToken(id, {})
      await deleteVerifyDoc(email)
      return res.status(200).send(token)
    }
    throw { message: 'Invalid verification code.' }
  } catch (err) {
    return res.status(400).send(err.message)
  }
}

export default verifyController
