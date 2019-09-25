import twemoji from 'twemoji'

const emojize = (emoji) => {
  const emojiString = twemoji.parse(emoji, {
    folder: 'svg',
    ext: '.svg'
  })
  return emojiString.split(`"`)[7]
}

export default emojize
