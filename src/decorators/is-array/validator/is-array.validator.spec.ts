import { isArrayValidator } from './is-array.validator'

describe('Validator - IsString', () => {
  it('should return false when value is not an array', () => {
    expect(isArrayValidator('', null).valid).toEqual(false)
    expect(isArrayValidator('', undefined).valid).toEqual(false)
    expect(isArrayValidator('', 0).valid).toEqual(false)
    expect(isArrayValidator('', {}).valid).toEqual(false)
  })

  it('should return true when value is an array', () => {
    expect(isArrayValidator('', []).valid).toEqual(true)
  })
})
