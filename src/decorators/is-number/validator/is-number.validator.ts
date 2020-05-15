import { ValidationResponse } from '../../../types/validator/validator.types'
import { ValidatorsErrorMessages } from '../../../error-messages'

export function isNumberValidator (value: any): ValidationResponse {
  const valid = typeof value === 'number'
  return {
    valid,
    message: !valid && ValidatorsErrorMessages.IS_NUMBER
  }
}
