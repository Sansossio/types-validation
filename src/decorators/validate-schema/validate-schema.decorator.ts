import { baseDecorator } from '../base/base.decorator'
import { validateSchemaValidator } from './validator/validate-schema.validator'

export const ValidateSchema = baseDecorator(validateSchemaValidator)
