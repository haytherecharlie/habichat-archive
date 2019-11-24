interface Emitter {
  emit: (key: string, value: string) => void
  removeListener: (key: string, cb: (data: string) => void) => void
  on: (key: string, cb: (data: string) => void) => void
}