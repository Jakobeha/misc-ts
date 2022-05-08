class AssertionError extends Error {
  constructor (message?: string) {
    super(message ?? 'Assertion failed')
    this.name = 'AssertionError'
  }
}

export function assert (condition: boolean, message?: string): asserts condition {
  if (!condition) {
    throw new AssertionError(message)
  }
}
