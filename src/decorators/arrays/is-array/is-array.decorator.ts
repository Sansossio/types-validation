import { registerProperty } from '../../utils/register-property/register-property.utils'
import { DecoratorParams } from '../../../types/decorator-params/decorator-params.types'
import { GenericOptions } from '../../../types/generic-options/generic-options.types'
import { isArrayValidator } from './validator/is-array.validator'

export const IsArray = function (options?: GenericOptions) {
  return function (target: Object, propertyKey: string, parameterIndex?: number) {
    const params: DecoratorParams = {
      target,
      propertyKey,
      parameterIndex,
      options
    }
    registerProperty(isArrayValidator, params)
  }
}
