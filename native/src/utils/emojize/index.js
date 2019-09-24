import twemoji from 'twemoji'

const emojize = (emoji) => {
  const emojiString = twemoji.parse(emoji)
  return emojiString.split(`"`)[7]
}

export default emojize
