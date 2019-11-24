import { Request, Response } from 'express'
import EventEmitter from 'eventemitter3'

class SSE {
  private emitter = new EventEmitter()

  public publish = (key: string, value: object) => {
    return this.emitter.emit(key, JSON.stringify(value))
  }

  public subscribe = (req: Request, res: Response, key: string) => {
    const heartbeat = setInterval(() => res.write('\n'), 15000)

    const handleClose = () => {
      clearInterval(heartbeat)
      return this.emitter.removeListener(key, handleEvent)
    }

    const handleEvent = (data: string) => {
      res.write('retry: 500\n')
      res.write(`event: event\n`)
      res.write(`data: ${data}\n\n`)
    }

    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
      'Connection': 'keep-alive'
    })

    this.emitter.on(key, handleEvent)
    req.on('close', handleClose)
  }
}

export default new SSE()
