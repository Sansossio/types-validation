import { isStringValidator } from './validator/is-string.validator'
import { registerProperty } from '../../utils/register-property/register-property.utils'
import { DecoratorParams } from '../../../types/decorator-params/decorator-params.types'
import { GenericOptions } from '../../../types/generic-options/generic-options.types'

export const IsString = function (options?: GenericOptions) {
  return function (target: Object, propertyKey: string, parameterIndex?: number) {
    const params: DecoratorParams = {
      target,
      propertyKey,
      parameterIndex,
      options
    }
    registerProperty(isStringValidator, params)
  }
}
