import { ValidationResponse } from '../../../types/validator/validator.types'
import { ValidatorsErrorMessages } from '../../../error-messages'
import { getClassParameters } from '../../../utils/get-class-parameters/get-class-parameters.utils'
import { ValidateSchemaOptions } from '../validate-nested.options'
import { castArray } from '../../../utils/cast-array/cast-array.utils'
import { validateNestedCallValidators } from './utils/validate-nested.call-validators.utils'

const description = ValidatorsErrorMessages.VALIDATE_SCHEMA

export function validateNestedValidator (key: string, options: ValidateSchemaOptions) {
  return function (_: string, value: any): ValidationResponse {
    const messages: ValidationResponse[] = []
    const properties = getClassParameters(options.type)
    if (properties.length === 0) {
      return {
        key,
        valid: false,
        description,
        messages
      }
    }
    if (options.each) {
      const values = castArray(value)
      let i = 0
      for (const val of values) {
        validateNestedCallValidators(properties, messages, val, i++)
      }
    } else {
      validateNestedCallValidators(properties, messages, value)
    }
    return {
      key,
      description,
      valid: messages.length === 0,
      messages: messages
    }
  }
}
