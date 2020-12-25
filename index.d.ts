export default function <T>(): {
  subscribe: (callback: (state: T) => void) => number
  setState: (value: T) => void
  getState: () => T
  unsubscribe: (id: number) => void
}
