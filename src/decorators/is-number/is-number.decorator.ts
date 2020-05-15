import 'reflect-metadata'
import { MethodProperty } from '../../types/method-property/method-property.types'
import { setProperty } from '../../utils/set-property/set-property.utils'
import { getParameters } from '../../utils/get-parameters/get-parameters.utils'
import { isNumberValidator } from './validator/is-number.validator'

export function IsNumber () {
  return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
    const registerProperty: MethodProperty = {
      index: parameterIndex,
      validator: isNumberValidator,
      key: getParameters(target[propertyKey])[parameterIndex]
    }
    setProperty(registerProperty, target, propertyKey)
  }
}
