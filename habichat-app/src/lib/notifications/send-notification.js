import { notifications } from 'src/config/app-services.json'

const sendNotification = async ({ token, user, message }) =>
  fetch(__DEV__ ? notifications.local : notifications.production, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      token: token || 'ExponentPushToken[7fO0v9J_K-cm3-vuMiiKpr]',
      user: user || 'Charlie',
      message: message || 'Hello World!'
    })
  })

export default sendNotification
