import { validateSchemaValidator } from './validator/validate-schema.validator'
import { registerProperty } from '../utils/register-property/register-property.utils'
import { ValidateSchemaOptions } from './validate-schema.options'
import { validatorSchemaGetType } from './validator/validator-schema.get-type'

export const ValidateSchema = function (options?: ValidateSchemaOptions) {
  return function (target: Object, propertyKey: string, parameterIndex?: number) {
    const type = options?.type || validatorSchemaGetType(target, propertyKey, parameterIndex)
    registerProperty(validateSchemaValidator(propertyKey, type), target, propertyKey, parameterIndex)
  }
}
