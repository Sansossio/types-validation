import 'reflect-metadata'
import { MethodProperty } from '../../types/method-property/method-property.types'
import { isStringValidator } from './validator/is-string.validator'
import { setProperty } from '../../utils/set-property/set-property.utils'
import { getParameters } from '../../utils/get-parameters/get-parameters.utils'

export function IsString () {
  return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
    const registerProperty: MethodProperty = {
      index: parameterIndex,
      validator: isStringValidator,
      key: getParameters(target[propertyKey])[parameterIndex]
    }
    setProperty(registerProperty, target, propertyKey)
  }
}
