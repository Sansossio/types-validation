import { isNumberValidator } from './is-number.validator'

describe('Validator - IsNumber', () => {
  const key = ''
  it('should return false when value is not a number', () => {
    expect(isNumberValidator(key, null).valid).toEqual(false)
    expect(isNumberValidator(key, undefined).valid).toEqual(false)
    expect(isNumberValidator(key, '').valid).toEqual(false)
    expect(isNumberValidator(key, {}).valid).toEqual(false)
  })

  it('should return true when value is a number', () => {
    expect(isNumberValidator(key, 0).valid).toEqual(true)
  })
})
