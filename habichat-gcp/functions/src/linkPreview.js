const functions = require('firebase-functions')
const request = require('request')
const cheerio = require('cheerio')

module.exports = functions.https.onRequest((req, res) => {
  const url = req.body.url
  if (!url) return res.status(400).send('400: Invalid parameters')

  request(url, (error, _, html) => {
    if (error) return res.send(error)

    const $ = cheerio.load(html)
    const titleTag = $('title').text()
    const titleMeta = $('meta[property="og:title"]').attr('content')
    const title = !titleMeta ? titleTag : titleMeta
    const img = $('meta[property="og:image"]').attr('content')
    const descriptionMeta = $('meta[property="og:description"]').attr('content')
    const descriptionTag = $('meta[property="description"]').text()
    const description = !descriptionMeta ? descriptionTag : descriptionMeta

    return res.send({ img, title, description, url })
  })
})
