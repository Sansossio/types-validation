import { ClassProperty } from '../../../types/class-property/class-property.tpyes'
import { MethodPropertyValidator } from '../../../types/method-property/method-property.validator.types'
import { setClassProperty } from '../../../utils/set-class-property/set-class-property.utils'

export function registerClassProperty (validator: MethodPropertyValidator, target: Object, propertyKey: string | symbol) {
  const registerProperty: ClassProperty = {
    key: propertyKey,
    validator
  }
  setClassProperty(registerProperty, target)
}
