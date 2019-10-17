import options from 'src/utils/options'
import { emailFunction, verifyFunction } from 'src/constants'

export const callEmailFunction = (email) => {
  const { url, method } = emailFunction
  return fetch(url, options(method, { body: JSON.stringify({ email }) }))
    .then((res) => res.status)
    .catch((err) => { throw err })
}

export const callVerifyFunction = (email, code) => {
  const { url, method } = verifyFunction
  return fetch(url, options(method, { body: JSON.stringify({ email, code }) }))
    .then((res) => res.json())
    .catch((err) => { throw err })
}
