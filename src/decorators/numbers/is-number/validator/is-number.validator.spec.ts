import { isNumberValidator } from './is-number.validator'

describe('Validator - IsNumber', () => {
  it('should return false when value is not a number', () => {
    expect(isNumberValidator('', null).valid).toEqual(false)
    expect(isNumberValidator('', undefined).valid).toEqual(false)
    expect(isNumberValidator('', '').valid).toEqual(false)
    expect(isNumberValidator('', {}).valid).toEqual(false)
  })

  it('should return true when value is a number', () => {
    expect(isNumberValidator('', 0).valid).toEqual(true)
  })
})
