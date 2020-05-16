import { MethodPropertyValidator } from '../../types/method-property/method-property.validator.types'
import { MethodProperty } from '../../types/method-property/method-property.types'
import { getFunctionParameters } from '../../utils/get-function-parameters/get-function-parameters.utils'
import { setFunctionProperty } from '../../utils/set-function-property/set-function-property.utils'

export function baseDecorator (validator: MethodPropertyValidator) {
  return function () {
    return function (target: Object, propertyKey: string | symbol, parameterIndex?: number) {
      const registerProperty: MethodProperty = {
        index: parameterIndex,
        validator,
        key: getFunctionParameters(target[propertyKey])[parameterIndex]
      }
      setFunctionProperty(registerProperty, target, propertyKey)
    }
  }
}
