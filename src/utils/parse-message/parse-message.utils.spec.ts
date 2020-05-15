import { parseMessage } from './parse-message.utils'

describe('Parse message', () => {
  it('should return message replacing a single variable', () => {
    const message = '{key}'
    const key = 'hello world'
    expect(parseMessage(message, { key })).toEqual(key)
  })

  it('should return message with repeated key', () => {
    const message = '{key} {key}'
    const key = 'hello world'
    expect(parseMessage(message, { key })).toEqual(`${key} ${key}`)
  })

  it('should return message with multiple variables', () => {
    const message = '{key}{key2}'
    const key = 'hello'
    const key2 = 'world'
    expect(parseMessage(message, { key, key2 })).toEqual(key + key2)
  })

  it('should return empty string when message is not string intance', () => {
    expect(parseMessage(null as any, {})).toEqual('')
  })
})
