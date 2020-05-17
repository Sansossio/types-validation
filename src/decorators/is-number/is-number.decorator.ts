import { isNumberValidator } from './validator/is-number.validator'
import { registerProperty } from '../utils/register-property/register-property.utils'

export const IsNumber = function () {
  return function (target: Object, propertyKey: string | symbol, parameterIndex?: number) {
    registerProperty(isNumberValidator, target ,propertyKey, parameterIndex)
  }
}
