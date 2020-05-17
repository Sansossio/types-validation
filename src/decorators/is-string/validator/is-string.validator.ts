import { ValidationResponse } from '../../../types/validator/validator.types'
import { ValidatorsErrorMessages } from '../../../error-messages'

export function isStringValidator (key: string, value: any): ValidationResponse {
  const valid = typeof value === 'string'
  return {
    key,
    valid,
    description: !valid && ValidatorsErrorMessages.IS_STRING
  }
}
