import { GenericOptions } from '../../../types/generic-options/generic-options.types'
import { DecoratorParams } from '../../../types/decorator-params/decorator-params.types'
import { registerProperty } from '../../utils/register-property/register-property.utils'
import { isNotEmptyValidator } from './validator/is-not-empty.validator'

export const IsNotEmpty = function (options?: GenericOptions) {
  return function (target: Object, propertyKey: string, parameterIndex?: number) {
    const params: DecoratorParams = {
      target,
      propertyKey,
      parameterIndex,
      options
    }
    registerProperty(isNotEmptyValidator, params)
  }
}
