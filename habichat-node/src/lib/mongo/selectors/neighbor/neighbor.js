import Community from 'lib/mongo/models/community-model'

export const saveNeighborToCommunity = async user => {
  try {
    const { _id, firstname, lastname, picture, interests, community } = user
    return await Community.updateOne({ 'address.name': community }, { $push: { neighbors: { _id, firstname, lastname, picture, interests } } })
  } catch (err) {
    throw { code: 500, message: 'Error adding neighbor to community.' }
  }
}
