import { isNotEmptyValidator } from './is-not-empty.validator'

describe('IsNotEmpty Validator', () => {
  const key = ''
  it('should return false when value is null, undefined or empty string', () => {
    expect(isNotEmptyValidator(key, '').valid).toEqual(false)
    expect(isNotEmptyValidator(key, null).valid).toEqual(false)
    expect(isNotEmptyValidator(key, undefined).valid).toEqual(false)
  })

  it('should return true when value is not empty', () => {
    expect(isNotEmptyValidator(key, 'not empty').valid).toEqual(true)
    expect(isNotEmptyValidator(key, 0).valid).toEqual(true)
    expect(isNotEmptyValidator(key, {}).valid).toEqual(true)
    expect(isNotEmptyValidator(key, []).valid).toEqual(true)
  })
})
