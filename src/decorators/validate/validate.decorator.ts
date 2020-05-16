import { getParameters } from '../../utils/get-parameters/get-parameters.utils'
import { validateParameters } from './validator/parameters.validator'

export function Validate () {
  return function (target: Object, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    const properties = getParameters(target, propertyName)
    const method = descriptor.value
    descriptor.value = function () {
      validateParameters(properties, arguments)
      return method.apply(this, arguments)
    }
  }
}
