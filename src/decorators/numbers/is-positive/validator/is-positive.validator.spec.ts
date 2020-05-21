import { isPositiveNumberValidator } from './is-positive.validator'

describe('IsPositive', () => {
  const key = ''
  it('should return false when is not a number', () => {
    expect(isPositiveNumberValidator(key, {}).valid).toEqual(false)
    expect(isPositiveNumberValidator(key, null).valid).toEqual(false)
    expect(isPositiveNumberValidator(key, []).valid).toEqual(false)
    expect(isPositiveNumberValidator(key, '').valid).toEqual(false)
  })

  it('should return false when is a number but is not positive', () => {
    expect(isPositiveNumberValidator(key, -1).valid).toEqual(false)
    expect(isPositiveNumberValidator(key, 0).valid).toEqual(false)
  })

  it('should return true when value is a positive number', () => {
    expect(isPositiveNumberValidator(key, 1).valid).toEqual(true)
  })
})
