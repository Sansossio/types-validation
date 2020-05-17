import { validateSchemaValidator } from './validator/validate-schema.validator'
import { registerProperty } from '../utils/register-property/register-property.utils'

export const ValidateSchema = function () {
  return function (target: Object, propertyKey: string | symbol, parameterIndex?: number) {
    registerProperty(validateSchemaValidator, target ,propertyKey, parameterIndex)
  }
}
