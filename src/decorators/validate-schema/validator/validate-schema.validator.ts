import { ValidationResponse } from '../../../types/validator/validator.types'
import { ValidatorsErrorMessages } from '../../../error-messages'

export function validateSchemaValidator (value: any): ValidationResponse {
  const valid = true
  return {
    valid,
    message: !valid && ValidatorsErrorMessages.IS_STRING
  }
}
