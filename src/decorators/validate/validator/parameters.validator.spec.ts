import { validateParameters } from './parameters.validator'
import { MethodProperty } from '../../../types/method-property/method-property.types'
import { ValidationException } from '../../../errors/validation-exception.error'

describe('Properties validator', () => {
  it('must be defined', () => {
    expect(validateParameters).toBeDefined()
  })

  it('should return void when properties array is empty', () => {
    expect(validateParameters([], [])).toEqual(undefined)
  })

  it('should return void when all the properties are valid', () => {
    const property: MethodProperty = {
      index: 0,
      key: 'test',
      validator: () => ({
        valid: true
      })
    }
    expect(validateParameters([property], [])).toEqual(undefined)
  })

  it('should throw validation exception when some of the properties are invalid', () => {
    const properties: MethodProperty[] = [
      {
        index: 0,
        key: 'test',
        validator: () => ({
          valid: true
        })
      },
      {
        index: 1,
        key: 'tes2',
        validator: () => ({
          valid: false
        })
      }
    ]
    expect(() => validateParameters(properties, [])).toThrowError(ValidationException)
  })
})
