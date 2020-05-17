import { isClassProperty } from '../../../utils/is-class-property/is-class-property.utils'
import { registerClassProperty } from './register-class-property.utils'
import { registerFunctionProperty } from './register-function-property.utils'
import { MethodPropertyValidator } from '../../../types/method-property/method-property.validator.types'

export function registerProperty (validator: MethodPropertyValidator, target: Object, propertyKey: string | symbol, parameterIndex?: number) {
  isClassProperty(parameterIndex) ?
    registerClassProperty(validator, target, propertyKey) :
    registerFunctionProperty(validator, target, propertyKey, parameterIndex)
}
