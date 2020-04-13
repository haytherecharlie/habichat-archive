import User from 'lib/mongo/models/user-model'
import { saveNeighborToCommunity } from 'lib/mongo/selectors/neighbor/neighbor'

export const findUser = async email => {
  try {
    const user = await User.findOne({ email })
    return user ? user._doc : null
  } catch (err) {
    throw { code: 500, message: 'Error finding user in database' }
  }
}

export const saveNewUser = async email => {
  try {
    const user = new User()
    const time = new Date().getTime()
    user.email = email
    user.userCreatedAt = time
    user.userLastLogin = time
    return await user.save()
  } catch (err) {
    throw { code: 500, message: 'Error saving user to database.' }
  }
}

export const updateUser = async (email, updates) => {
  try {
    const user = await findUser(email)
    const newUser = { ...user, ...updates }
    await User.updateOne({ email }, newUser)
    const updatedUser = await findUser(email)
    await saveNeighborToCommunity(updatedUser)
    return updatedUser
  } catch (err) {
    console.log(err)
    throw { code: 500, message: 'Error updating user to database.' }
  }
}
