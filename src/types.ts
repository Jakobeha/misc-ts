export type AnyRecord = Record<string, unknown>
export type Empty = Record<string, never>

export type DataRecord = Record<string, Data>
export type LogicRecord = Record<string, Logic>

/** Not a function */
export type Data = string | number | boolean | null | undefined | Data[] | object

/** A pure function */
export type Logic = /* @__PURE__ */ (...args: any[]) => any
// I don't think the pure annotation actually does anything

type _ExplicitPartial<T extends object> = {
  [K in keyof T]: T[K] | undefined
}

export type ExplicitPartial<T extends object> = _ExplicitPartial<Required<T>>

export type DeepReadonly<T> = {
  readonly [K in keyof T]: DeepReadonly<T[K]>
}

export type NullToEmpty<T> = T extends null | undefined ? Empty : T

export type FirstParameter<T extends (arg: any, ...rest: any) => any> =
  T extends (arg: infer A, ...rest: any) => any ? A : never

export type Single<T> =
  T extends AsyncIterable<infer U> | Promise<Iterable<infer U>> ? Promise<Single<U> | null> :
    T extends Iterable<infer U> ? Single<U> | null :
      T

export type UnAsyncIterable<T> =
  T extends AsyncIterable<infer U> ? U : never

export type UnPromise<T> =
  T extends Promise<infer U> ? U : T

export type Extends<T, U> = T extends U ? T : never

export type ElemType<T extends any[]> = T extends Array<infer E> ? E : never

export type RecursiveElemType<T> = T extends Array<infer E> ? RecursiveElemType<E> : T

export type IntoArray<T> =
  T extends any[] ? T : T extends undefined ? [] : [T]

export type Unsubscribe = () => void
