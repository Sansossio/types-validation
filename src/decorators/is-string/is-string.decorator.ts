import { isStringValidator } from './validator/is-string.validator'
import { registerProperty } from '../utils/register-property/register-property.utils'
import { DecoratorParams } from '../../types/decorator-params/decorator-params.types'

export const IsString = function () {
  return function (target: Object, propertyKey: string | symbol, parameterIndex?: number) {
    const params: DecoratorParams = {
      target,
      propertyKey,
      parameterIndex
    }
    registerProperty(isStringValidator, params)
  }
}
