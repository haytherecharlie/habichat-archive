import EventEmitter from 'eventemitter3'
import { Request, Response } from 'express'

interface Emitter {
  emit: (key: string, value: string) => void
  removeListener: (key: string, cb: (data: string) => void) => void
  on: (key, cb: (data: string) => void) => void
}

class ServerSentEvents {
  emitter: Emitter = new EventEmitter()
  req: Request
  res: Response
  heartbeat: number

  public publishEvent = (key: string, value: object) => {
    return this.emitter.emit(key, JSON.stringify(value))
  }

  public subscribeEvent = (req: Request, res: Response, key: string) => {
    this.req = req
    this.res = res
    this.heartbeat = window.setInterval(() => this.res.write('\n'), 15000)
    this.emitter.on(key, this.handleEvent)
    this.req.on('close', () => {
      clearInterval(this.heartbeat)
      return this.emitter.removeListener(key, this.handleEvent)
    })
  }

  private writeHead = () => {
    return this.res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
      Connection: 'keep-alive'
    })
  }

  private handleEvent = (data: string) => {
    this.res.write('retry: 500\n')
    this.res.write(`event: event\n`)
    this.res.write(`data: ${data}\n\n`)
  }
}

export const { publishEvent, subscribeEvent } = new ServerSentEvents()
