import options from 'src/utils/options'
import { emailFunction, verifyFunction } from 'src/constants'

export const callEmailFunction = (email) => {
  const { url, method } = emailFunction
  fetch(url, options(method, { body: JSON.stringify({ email }) }))
    .then((res) => res.status)
    .catch((err) => { throw err })
}

export const callVerifyFunction = (code) => {
  const { url, method } = verifyFunction
  fetch(url, options(method, { body: JSON.stringify({ code }) }))
    .then((res) => res.status)
    .catch((err) => { throw err })
}
