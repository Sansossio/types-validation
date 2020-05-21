import { isArrayValidator } from './is-array.validator'

describe('Validator - IsString', () => {
  const key = ''
  it('should return false when value is not an array', () => {
    expect(isArrayValidator(key, null).valid).toEqual(false)
    expect(isArrayValidator(key, undefined).valid).toEqual(false)
    expect(isArrayValidator(key, 0).valid).toEqual(false)
    expect(isArrayValidator(key, {}).valid).toEqual(false)
  })

  it('should return true when value is an array', () => {
    expect(isArrayValidator(key, []).valid).toEqual(true)
  })
})
