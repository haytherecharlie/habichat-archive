export const generatePin = () => {
  const digit = () => Math.floor(Math.random() * 10)
  return `${digit()}${digit()}${digit()}${digit()}`
}
