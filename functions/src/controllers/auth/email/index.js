import { createVerifyEntry } from 'services/firebase'

const emailController = async (req, res) => {
  try {
    const { email } = req.body
    if (email) {
      await createVerifyEntry(email)
      return res.status(200).send('success')
    }
    throw { message: 'Please provide email address' }
  } catch (err) {
    return res.status(400).send(err.message)
  }
}

export default emailController
