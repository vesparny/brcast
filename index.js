export default function createBroadcast (initialState) {
  let listeners = {}
  let id = 0
  let _state = initialState

  const getState = () => _state

  const setState = state => {
    _state = state
    Object.keys(listeners).forEach(id => listeners[id](_state))
  }

  const subscribe = listener => {
    const currentId = id
    listeners[currentId] = listener
    id += 1
    return function unsubscribe () {
      delete listeners[currentId]
    }
  }

  return { getState, setState, subscribe }
}
