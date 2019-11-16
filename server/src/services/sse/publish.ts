const publish = (emitter) => (text) => {
  return emitter.emit('event', JSON.stringify(text))
}

export default publish