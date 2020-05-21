import { registerProperty } from '../../utils/register-property/register-property.utils'
import { GenericOptions } from '../../../types/generic-options/generic-options.types'
import { DecoratorParams } from '../../../types/decorator-params/decorator-params.types'
import { isPositiveNumberValidator } from './validator/is-positive.validator'

export const IsPositive = function (options?: GenericOptions) {
  return function (target: Object, propertyKey: string, parameterIndex?: number) {
    const params: DecoratorParams = {
      target,
      propertyKey,
      parameterIndex,
      options
    }
    registerProperty(isPositiveNumberValidator, params)
  }
}
