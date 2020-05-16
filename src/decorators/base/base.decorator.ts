import { MethodPropertyValidator } from '../../types/method-property/method-property.validator.types'
import { isClassProperty } from '../../utils/is-class-property/is-class-property.utils'
import { registerClassProperty } from './utils/register-class-property.utils'
import { registerFunctionProperty } from './utils/register-function-property.utils'

export function baseDecorator (validator: MethodPropertyValidator) {
  return function () {
    return function (target: Object, propertyKey: string | symbol, parameterIndex?: number) {
      isClassProperty(parameterIndex) ?
        registerClassProperty(validator, target, propertyKey) :
        registerFunctionProperty(validator, target, propertyKey, parameterIndex)
    }
  }
}
