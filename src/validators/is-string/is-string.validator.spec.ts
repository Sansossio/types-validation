import { isStringValidator } from './is-string.validator'

describe('Validator - IsString', () => {
  it('should return false when value is not a string', () => {
    expect(isStringValidator(null)).toEqual(false)
    expect(isStringValidator(undefined)).toEqual(false)
    expect(isStringValidator(0)).toEqual(false)
    expect(isStringValidator({})).toEqual(false)
  })

  it('should reutnr true when vlaue is a string', () => {
    expect(isStringValidator('')).toEqual(true)
  })
})
