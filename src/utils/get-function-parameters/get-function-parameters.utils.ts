export function getFunctionParameters (func: Function) {
  return func.toString()
    .replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s))/mg, '')
    .match(/^\s*[^\(]*\(\s*([^\)]*)\)/m)[1]
    .split(/,/)
}
