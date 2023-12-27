let EMPTY = Symbol('EMPTY')
function defaultCacheKey(...args: any[]) {
  if (args.length === 0) {
    return EMPTY
  }

  if (args.length === 1) {
    let arg = args[0]

    if (
      typeof arg === 'string' ||
      typeof arg === 'number' ||
      typeof arg === 'boolean' ||
      typeof arg === 'symbol' ||
      arg === null ||
      arg === undefined
    ) {
      return arg
    }

    if (Array.isArray(arg)) {
      return arg.map((x) => defaultCacheKey(x)).join(',')
    }

    if (typeof arg === 'object') {
      return JSON.stringify(arg)
    }
  }

  return JSON.stringify(args)
}

export function memoize<T extends (...args: any[]) => any>(
  fn: T,
  cacheKey: (...args: Parameters<T>) => string = defaultCacheKey
): T {
  let cache = new Map<string, ReturnType<T>>()

  return ((...args: Parameters<T>) => {
    let key = cacheKey(...args)

    if (cache.has(key)) {
      return cache.get(key)
    }

    let result = fn(...args)
    cache.set(key, result)

    return result
  }) as T
}
