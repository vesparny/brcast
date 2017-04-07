import mitt from 'mitt'

export default function createBroadcast (initialState, channel = '__brcast__') {
  const emitter = mitt()
  let currentState = initialState

  const getState = () => currentState

  const setState = state => {
    currentState = state
    emitter.emit(channel, currentState)
  }

  const subscribe = listener => {
    emitter.on(channel, listener)

    return function unsubscribe () {
      emitter.off(channel, listener)
    }
  }

  return {getState, setState, subscribe}
}
