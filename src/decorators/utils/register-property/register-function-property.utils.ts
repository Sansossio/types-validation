import { getFunctionParamsName } from '../../../utils/get-function-params-name/get-function-params-name.utils'
import { setFunctionProperty } from '../../../utils/set-function-property/set-function-property.utils'
import { MethodProperty } from '../../../types/method-property/method-property.types'
import { MethodPropertyValidator } from '../../../types/method-property/method-property.validator.types'
import { DecoratorParams } from '../../../types/decorator-params/decorator-params.types'

export function registerFunctionProperty (validator: MethodPropertyValidator, params: DecoratorParams) {
  const {
    propertyKey,
    target,
    parameterIndex
  } = params
  const registerProperty: MethodProperty = {
    index: parameterIndex,
    validator,
    key: getFunctionParamsName(target[propertyKey])[parameterIndex],
    params
  }
  setFunctionProperty(registerProperty, target, propertyKey)
}
