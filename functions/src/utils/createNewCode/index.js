const createNewCode = () => {
  const digit = () => Math.floor(Math.random() * 10)
  return `${digit()}${digit()}${digit()}${digit()}`
}

export default createNewCode
