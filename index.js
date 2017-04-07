import mitt from 'mitt'

const CHANNEL = '__brcast__'

export default function createBroadcast (initialState) {
  const emitter = mitt()
  let currentState = initialState

  const getState = () => currentState

  const setState = state => {
    currentState = state
    emitter.emit(CHANNEL, currentState)
  }

  const subscribe = listener => {
    emitter.on(CHANNEL, listener)

    return function unsubscribe () {
      emitter.off(CHANNEL, listener)
    }
  }

  return {getState, setState, subscribe}
}
