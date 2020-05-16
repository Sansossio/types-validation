import { isClassProperty } from './is-class-property.utils'

describe('IsClassProperty', () => {
  it('should return true when parameter index is not a number', () => {
    expect(isClassProperty()).toEqual(true)
    expect(isClassProperty('' as any)).toEqual(true)
  })

  it('should return false when parameter is a number', () => {
    expect(isClassProperty(0)).toEqual(false)
  })
})
