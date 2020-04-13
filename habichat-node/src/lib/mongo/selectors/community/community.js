import Community from 'lib/mongo/models/community-model'

export const findCommunity = async name => {
  try {
    const community = await Community.findOne({ 'address.name': name })
    return community ? community._doc : null
  } catch (err) {
    throw { code: 500, message: 'Error finding community in database' }
  }
}

export const saveCommunity = async ({ name, unit, number, street, city, region, country, postcode, passphrase, coordinates }) => {
  try {
    const community = new Community()
    community.address = { name, unit, number, street, city, region, country, postcode, passphrase, coordinates }
    return await community.save()
  } catch (err) {
    throw { code: 500, message: 'Error saving community to database.' }
  }
}
