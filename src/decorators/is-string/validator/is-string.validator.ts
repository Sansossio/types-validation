import { ValidationResponse } from '../../../types/validator/validator.types'
import { ValidatorsErrorMessages } from '../../../error-messages'

export function isStringValidator (value: any): ValidationResponse {
  const valid = typeof value === 'string'
  return {
    valid,
    message: !valid && ValidatorsErrorMessages.IS_STRING
  }
}
