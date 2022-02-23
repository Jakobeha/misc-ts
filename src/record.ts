export module Record {
  /**
   * If TypeScript is complaining about `Partial` *don't* use this function, use `PartialRecord` instead.
   * With this method, you can actually get an unchecked type error if one of the fields is `undefined` and your transformer isn't equipped to handle it.
   */
  export function mapValues<K extends string | number | symbol, VI, VO> (record: Record<K, VI>, transform: (value: VI, key: K) => VO): Record<K, VO> {
    const result: Partial<Record<K, VO>> = {}
    for (const key in record) {
      result[key] = transform(record[key], key)
    }
    return result as Record<K, VO>
  }

  export async function forEachConcurrent<K extends string, V> (record: Record<K, V>, action: (key: K, value: V) => Promise<void>): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    await Promise.all(Object.keys(record).map((key) => action(key as K, record[key as K])))
  }

  export async function mapValuesConcurrent<K extends string, VI, VO> (record: Record<K, VI>, transform: (value: VI, key: K) => Promise<VO>): Promise<Record<K, VO>> {
    const result: Partial<Record<K, VO>> = {}
    await Promise.all(Object.keys(record).map(async (key) => {
      result[key as K] = await transform(record[key as K], key as K)
    }))
    return result as Record<K, VO>
  }
}

export module PartialRecord {
  export function mapValues<K extends string | number | symbol, VI, VO> (record: Partial<Record<K, VI>>, transform: (value: VI, key: K) => VO): Partial<Record<K, VO>> {
    const result: Partial<Record<K, VO>> = {}
    for (const key in record) {
      if (record[key] !== undefined) {
        result[key] = transform(record[key]!, key)
      }
    }
    return result as Record<K, VO>
  }
}
