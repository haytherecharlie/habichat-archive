import { auth } from 'services/firebase'

const helloWorld = async (req, res) => {
  console.log('yes')
  res.status(200).send('hello email')
  // const token = await auth.createCustomToken(email).catch((err) => {
  //   throw `Error creating custom token ${token}`
  // })
  // res.status(200).send(token)
}

export default helloWorld
