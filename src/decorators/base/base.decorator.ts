import { MethodPropertyValidator } from '../../types/method-property/method-property.validator.types'
import { MethodProperty } from '../../types/method-property/method-property.types'
import { getParameters } from '../../utils/get-function-parameters/get-function-parameters.utils'
import { setProperty } from '../../utils/set-property/set-property.utils'

export function baseDecorator (validator: MethodPropertyValidator) {
  return function () {
    return function (target: Object, propertyKey: string | symbol, parameterIndex?: number) {
      const registerProperty: MethodProperty = {
        index: parameterIndex,
        validator,
        key: getParameters(target[propertyKey])[parameterIndex]
      }
      setProperty(registerProperty, target, propertyKey)
    }
  }
}
