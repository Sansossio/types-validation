import { isClassProperty } from '../../../utils/is-class-property/is-class-property.utils'

export function validatorNestedGetType (target: Object, propertyKey: string | symbol, parameterIndex?: number) {
  if (isClassProperty(parameterIndex)) {
    return Reflect.getMetadata('design:type', target, propertyKey)
  }
  return Reflect.getMetadata('design:paramtypes', target, propertyKey)[parameterIndex]
}
