import { ValidationResponse } from '../../../types/validator/validator.types'
import { ValidatorsErrorMessages } from '../../../error-messages'

export function isNumberValidator (key: string, value: any): ValidationResponse {
  const valid = typeof value === 'number'
  return {
    key,
    valid,
    message: !valid && ValidatorsErrorMessages.IS_NUMBER
  }
}
