import { savePost } from 'lib/mongo/selectors/post/post'
import { decodeToken } from 'lib/jsonwebtoken/jsonwebtoken'

export const POST = async (req, res) => {
  try {
    const { _id, community } = await decodeToken(req.headers.token)
    await savePost({ _id, community }, req.body)
    return res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.status(err.code).send(err.message)
  }
}
