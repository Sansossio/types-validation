import { isStringValidator } from './is-string.validator'

describe('Validator - IsString', () => {
  const key = ''
  it('should return false when value is not a string', () => {
    expect(isStringValidator(key, null).valid).toEqual(false)
    expect(isStringValidator(key, undefined).valid).toEqual(false)
    expect(isStringValidator(key, 0).valid).toEqual(false)
    expect(isStringValidator(key, {}).valid).toEqual(false)
  })

  it('should return true when value is a string', () => {
    expect(isStringValidator(key, '').valid).toEqual(true)
  })
})
