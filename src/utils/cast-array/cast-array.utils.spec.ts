import { castArray } from './cast-array.utils'

describe('Cast array', () => {
  it('should convert value to array when its not an array', () => {
    const value = 'a'
    expect(castArray(value)).toEqual([value])
  })

  it('should return original value when it is an array', () => {
    const value = ['value', {}]
    expect(castArray(value)).toEqual(value)
  })
})
