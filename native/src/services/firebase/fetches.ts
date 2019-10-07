import options from 'src/utils/options'
import { emailFunction } from 'src/constants'

export const callEmailFunction = (email) => {
  const { url, method } = emailFunction
  fetch(url, options(method, { body: JSON.stringify({ email }) }))
    .then(res => res.status)
    .catch((err) => { throw err })
}
