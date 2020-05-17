import { isStringValidator } from './is-string.validator'

describe('Validator - IsString', () => {
  it('should return false when value is not a string', () => {
    expect(isStringValidator('', null).valid).toEqual(false)
    expect(isStringValidator('', undefined).valid).toEqual(false)
    expect(isStringValidator('', 0).valid).toEqual(false)
    expect(isStringValidator('', {}).valid).toEqual(false)
  })

  it('should return true when value is a string', () => {
    expect(isStringValidator('', '').valid).toEqual(true)
  })
})
