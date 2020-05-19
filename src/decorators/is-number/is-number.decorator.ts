import { isNumberValidator } from './validator/is-number.validator'
import { registerProperty } from '../utils/register-property/register-property.utils'
import { GenericOptions } from '../../types/generic-options/generic-options.types'
import { DecoratorParams } from '../../types/decorator-params/decorator-params.types'

export const IsNumber = function (options?: GenericOptions) {
  return function (target: Object, propertyKey: string, parameterIndex?: number) {
    const params: DecoratorParams = {
      target,
      propertyKey,
      parameterIndex,
      options
    }
    registerProperty(isNumberValidator, params)
  }
}
