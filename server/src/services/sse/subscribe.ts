const subscribe = (emitter) => (req, res) => {
  const heartbeat = setInterval(() => res.write('\n'), 15000)

  const handleEvent = (data) => {
    console.log('data', data)
    res.write('retry: 500\n')
    res.write(`event: event\n`)
    res.write(`data: ${data}\n\n`)
  }

  const closeConnection = () => {
    clearInterval(heartbeat)
    emitter.removeListener('event', handleEvent)
  }

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
    'Connection': 'keep-alive'
  })
  emitter.on('event', handleEvent)
  req.on('close', closeConnection)
}

export default subscribe
