import { Expo } from 'expo-server-sdk'

const expo = new Expo()

const sendExpoPushNotification = (token, user, message) => {
  if (Expo.isExpoPushToken(token)) {
    expo.sendPushNotificationsAsync(createnotification(token, user, message))
      .then(msg => res.status(200).send(msg))
      .catch(err => res.status(500).send(err))
  }
}

const createnotification = (token, user, message) => ({
  to: token,
  sound: 'default',
  body: `${user} says, "${message}"`
})

export default sendExpoPushNotification
