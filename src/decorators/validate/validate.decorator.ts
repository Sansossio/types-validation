import { getProperties } from '../../utils/get-properties/get-properties.utils'
import { validateProperties } from './validator/validate.validator'

export function Validate () {
  return function (target: Object, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    const properties = getProperties(target, propertyName)
    const method = descriptor.value
    descriptor.value = function () {
      validateProperties(properties, arguments)
      return method.apply(this, arguments)
    }
  }
}
