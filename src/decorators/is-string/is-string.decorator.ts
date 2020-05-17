import { isStringValidator } from './validator/is-string.validator'
import { registerProperty } from '../utils/register-property/register-property.utils'

export const IsString = function () {
  return function (target: Object, propertyKey: string | symbol, parameterIndex?: number) {
    registerProperty(isStringValidator, target ,propertyKey, parameterIndex)
  }
}
