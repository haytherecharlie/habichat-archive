import Message from './message.model'

export const saveMessage = async (text) => {
  try {
    const message = new Message()
    message.created = new Date().getTime()
    message.author = 'Charlie Hay'
    message.body = text
    await message.save()
    return { code: 200, message: 'message successfully posted.' }
  } catch (err) {
    console.log('SAVE MESSAGE ERROR: ', err)
    throw { code: 500, message: 'error saving message to database.' }
  }
}

export const findLast50Messages = async () => {
  try {
    return await Message.find().limit(50)
  } catch (err) {
    console.log('FIND LAST 50 MESSAGES ERROR: ', err)
    throw { code: 500, message: 'error finding last 50 messages from database.' }
  }
}
