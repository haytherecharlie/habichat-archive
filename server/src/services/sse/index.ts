import EventEmitter from 'eventemitter3'
import publish from './publish'
import subscribe from './subscribe'

const emitter = new EventEmitter()
const publishMessage = publish(emitter)
const subscribeMessages = subscribe(emitter)

export { publishMessage, subscribeMessages }
