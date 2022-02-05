export module Promises {
  export async function wait (millis: number): Promise<void> {
    return await new Promise<void>(resolve => {
      setTimeout(() => {
        resolve()
      }, millis)
    })
  }
}

export module PromiseOrNot {
  export function then<T, R> (value: T | Promise<T>, onFulfilled: (value: T) => R | Promise<R>): R | Promise<R> {
    if (value instanceof Promise) {
      return value.then(onFulfilled)
    } else {
      return onFulfilled(value)
    }
  }
}
