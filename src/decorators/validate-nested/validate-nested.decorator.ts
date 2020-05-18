import { validateNestedValidator } from './validator/validate-nested.validator'
import { registerProperty } from '../utils/register-property/register-property.utils'
import { ValidateSchemaOptions } from './validate-nested.options'
import { validatorNestedGetType } from './validator/validator-nested.get-type'
import { DecoratorParams } from '../../types/decorator-params/decorator-params.types'

export const ValidateNested = function (options?: ValidateSchemaOptions) {
  return function (target: Object, propertyKey: string, parameterIndex?: number) {
    const type = options?.type || validatorNestedGetType(target, propertyKey, parameterIndex)
    const params: DecoratorParams = {
      target,
      propertyKey,
      parameterIndex,
      options
    }
    registerProperty(validateNestedValidator(propertyKey, type), params)
  }
}
