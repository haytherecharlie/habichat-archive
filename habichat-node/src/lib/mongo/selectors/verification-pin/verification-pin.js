import VerificationPin from 'lib/mongo/models/verification-pin-model'

export const findVerificationPin = async email => {
  try {
    const { pin } = await VerificationPin.findOne({ email }).exec()
    return pin
  } catch (err) {
    throw { code: 500, message: 'Error finding pin in database' }
  }
}

export const updateVerificationPin = async (email, pin) => {
  try {
    return await VerificationPin.updateOne({ email }, { email, pin }, { upsert: true })
  } catch (err) {
    throw { code: 500, message: 'Error saving pin to database.' }
  }
}

export const deleteVerificationPin = async email => {
  try {
    await VerificationPin.deleteOne({ email })
  } catch (err) {
    throw { code: 500, message: 'Error deleting pin from database.' }
  }
}
