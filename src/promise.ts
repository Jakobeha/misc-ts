export module Promises {
  export async function wait (millis: number): Promise<void> {
    return await new Promise<void>(resolve => {
      setTimeout(() => {
        resolve()
      }, millis)
    })
  }
}
