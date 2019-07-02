//Global event handler, allows events to be subscribed, unsubscribed and published(triggered)
const _handlers = {}

export default {
  subscribe (event, handler) {
    if (!_handlers[event]) _handlers[event] = []
    _handlers[event].push(handler)
  },
  unsubscribe (event, handler) {
    if (!_handlers[event]) return
    _handlers[event] = _handlers[event].filter(func => func !== handler)
  },
  publish (event, ...args) {
    if (!_handlers[event]) return
    _handlers[event].forEach(handler => {
      if (typeof handler === 'function') {
        handler(...args)
      }
    })
  }
}
