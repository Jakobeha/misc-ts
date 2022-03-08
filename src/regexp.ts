export module Regexps {
  // From https://github.com/chalk/ansi-regex/blob/main/index.js
  function ansi ({ onlyStart = false, global = false } = {}): RegExp {
    const pattern = [
      (onlyStart ? '^' : '') + '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
      '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))'
    ].join('|')

    return new RegExp(pattern, global ? 'g' : '')
  }
  export const ANSI = ansi()
  export const ANSI_GLOBAL = ansi({ global: true })
  export const ANSI_START = ansi({ onlyStart: true })
}
