import { ValidationResponse } from '../../../types/validator/validator.types'
import { ValidatorsErrorMessages } from '../../../error-messages'
import { getClassParameters } from '../../../utils/get-class-parameters/get-class-parameters.utils'

export function validateSchemaValidator (key: string, type: any) {
  return function (value: any): ValidationResponse {
    let valid = true
    const messages: ValidationResponse[] = []
    const properties = getClassParameters(type)
    for (const property of properties) {
      const { key, validator } = property
      const result = validator(key, value?.[key])
      if (!result.valid) {
        valid = false
        messages.push(result)
      }
    }
    return {
      key,
      valid,
      description: ValidatorsErrorMessages.VALIDATE_SCHEMA,
      messages: messages
    }
  }
}
