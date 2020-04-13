import { saveCommunity } from 'lib/mongo/selectors/community/community'

export const POST = async (req, res) => {
  try {
    await saveCommunity(req.body)
    return res.status(200).send(`${req.body.name} created successfully.`)
  } catch (err) {
    res.status(err.code).send(err.message)
  }
}
