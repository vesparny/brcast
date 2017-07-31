export default function createBroadcast (initialState) {
  let listeners = {}
  let id = 0
  let _state = initialState

  const getState = () => _state

  const setState = state => {
    _state = state
    const keys = Object.keys(listeners)
    let i = 0
    const len = keys.length
    for (; i < len; i++) {
      // if a listener gets unsubscribed during setState we just skip it
      if (typeof listeners[keys[i]] !== 'undefined') {
        listeners[keys[i]](state)
      }
    }
  }

  // subscribe to changes and return the subscriptionId
  const subscribe = listener => {
    if (typeof listener !== 'function') {
      throw new Error('listener must be a function.')
    }
    const currentId = id
    listeners[currentId] = listener
    id += 1
    return currentId
  }

  // remove subscription by removing the listener function
  const unsubscribe = id => {
    if (listeners[id]) delete listeners[id]
  }

  return { getState, setState, subscribe, unsubscribe }
}
