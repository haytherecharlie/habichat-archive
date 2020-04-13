import { Permissions, Notifications } from 'expo'

const getToken = async () => await Notifications.getExpoPushTokenAsync()

const askForPermissions = async () => {
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
  return (await status) === 'granted' ? await getToken() : 'no token'
}

export const getInitialPermissions = async () => {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
  return (await status) !== 'granted' ? await askForPermissions() : await getToken()
}
