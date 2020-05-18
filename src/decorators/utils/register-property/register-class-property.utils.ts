import { ClassProperty } from '../../../types/class-property/class-property.tpyes'
import { MethodPropertyValidator } from '../../../types/method-property/method-property.validator.types'
import { setClassProperty } from '../../../utils/set-class-property/set-class-property.utils'
import { DecoratorParams } from '../../../types/decorator-params/decorator-params.types'

export function registerClassProperty (validator: MethodPropertyValidator, params: DecoratorParams) {
  const registerProperty: ClassProperty = {
    key: params.propertyKey,
    validator
  }
  setClassProperty(registerProperty, params.target)
}
