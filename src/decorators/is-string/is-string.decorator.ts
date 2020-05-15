import 'reflect-metadata'
import { MethodProperty } from '../../types/method-property/method-property.types'
import { isStringValidator } from '../../validators/is-string/is-string.validator'
import { setProperty } from '../../utils/set-property/set-property.utils'

export function IsString () {
  return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
    const registerProperty: MethodProperty = {
      index: parameterIndex,
      validator: isStringValidator
    }
    setProperty(registerProperty, target, propertyKey)
  }
}
