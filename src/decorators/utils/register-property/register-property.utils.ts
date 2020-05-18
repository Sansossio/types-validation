import { isClassProperty } from '../../../utils/is-class-property/is-class-property.utils'
import { registerClassProperty } from './register-class-property.utils'
import { registerFunctionProperty } from './register-function-property.utils'
import { MethodPropertyValidator } from '../../../types/method-property/method-property.validator.types'
import { DecoratorParams } from '../../../types/decorator-params/decorator-params.types'

export function registerProperty (validator: MethodPropertyValidator, params: DecoratorParams) {
  const {
    propertyKey,
    target,
    parameterIndex
  } = params
  isClassProperty(parameterIndex) ?
    registerClassProperty(validator, params) :
    registerFunctionProperty(validator, params)
}
