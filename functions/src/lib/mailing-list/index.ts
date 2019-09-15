import * as functions from 'firebase-functions'
import { firestore } from '../../utils/firebase'

const mailingList = functions.https.onRequest(async (req, res) => {
  try {
    const { email } = req.body
    await firestore
      .collection('emails')
      .doc()
      .set({ email })
    return res.status(200).send('Email saved successfully')
  } catch (err) {
    return res.status(400).send(`Error saving email address. \n ${err.message}`)
  }
})

export default mailingList
