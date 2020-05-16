import { getFunctionParameters } from '../../utils/get-func-parameters/get-func-parameters.utils'
import { validateParameters } from './validator/parameters.validator'

export function Validate () {
  return function (target: Object, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    const properties = getFunctionParameters(target, propertyName)
    const method = descriptor.value
    descriptor.value = function () {
      validateParameters(properties, arguments)
      return method.apply(this, arguments)
    }
  }
}
