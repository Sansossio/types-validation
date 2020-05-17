import { getFunctionParamsName } from '../../../utils/get-function-params-name/get-function-params-name.utils'
import { setFunctionProperty } from '../../../utils/set-function-property/set-function-property.utils'
import { MethodProperty } from '../../../types/method-property/method-property.types'
import { MethodPropertyValidator } from '../../../types/method-property/method-property.validator.types'

export function registerFunctionProperty (validator: MethodPropertyValidator, target: Object, propertyKey: string | symbol, parameterIndex?: number) {
  const registerProperty: MethodProperty = {
    index: parameterIndex,
    validator,
    key: getFunctionParamsName(target[propertyKey])[parameterIndex]
  }
  setFunctionProperty(registerProperty, target, propertyKey)
}
