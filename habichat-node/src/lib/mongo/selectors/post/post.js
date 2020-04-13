import Community from 'lib/mongo/models/community-model'
import { mongo } from 'mongoose'

export const savePost = async ({ _id, community }, body) => {
  try {
    const now = new Date().getTime()
    const { type, content } = body
    const newPost = {
      _id: new mongo.ObjectId(),
      createdAt: now,
      updatedAt: now,
      author: _id,
      type,
      content
    }
    return await Community.updateOne({ 'address.name': community }, { $push: { posts: newPost } })
  } catch (err) {
    console.log(err)
    throw { code: 500, message: 'error saving post to community' }
  }
}
