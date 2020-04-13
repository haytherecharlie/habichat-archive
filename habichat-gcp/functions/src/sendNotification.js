const functions = require('firebase-functions')
const { Expo } = require('expo-server-sdk')
const expo = new Expo()

module.exports = functions.https.onRequest((req, res) => {
  const { token, user, message } = req.body
  if (!token || !user || !message) return res.status(400).send('400: Invalid parameters')

  if (Expo.isExpoPushToken(token)) {
    const pushNotification = {
      to: token,
      sound: 'default',
      body: `${user} says, "${message}"`
    }

    expo
      .sendPushNotificationsAsync(pushNotification)
      .then(msg => res.status(200).send(msg))
      .catch(err => {
        console.error(err)
        return res.status(500).send(err)
      })
  }
})
