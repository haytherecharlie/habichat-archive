import EventEmitter from 'eventemitter3'
import publish from './publish'
import subscribe from './subscribe'

const emitter = new EventEmitter()
const publishMessage = publish(emitter)
const subscribeMessage = subscribe(emitter)

export { publishMessage, subscribeMessage }
