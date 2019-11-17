import EventEmitter from 'eventemitter3'

const eventEmitter = new EventEmitter()

export const publishEvent = (key, value) => {
  return eventEmitter.emit(key, JSON.stringify(value))
}

export const subscribeEvent = (req, res, key) => {
  const heartbeat = setInterval(() => res.write('\n'), 15000)

  const handleEvent = (data) => {
    res.write('retry: 500\n')
    res.write(`event: event\n`)
    res.write(`data: ${data}\n\n`)
  }

  const closeConnection = () => {
    clearInterval(heartbeat)
    eventEmitter.removeListener(key, handleEvent)
  }

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
    'Connection': 'keep-alive'
  })

  eventEmitter.on(key, handleEvent)
  req.on('close', closeConnection)
}
