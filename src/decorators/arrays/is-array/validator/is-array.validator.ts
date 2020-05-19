import { ValidationResponse } from '../../../../types/validator/validator.types'
import { ValidatorsErrorMessages } from '../../../../error-messages'

export function isArrayValidator (key: string, value: any): ValidationResponse {
  const valid = Array.isArray(value)
  return {
    key,
    valid,
    description: !valid && ValidatorsErrorMessages.IS_STRING
  }
}
