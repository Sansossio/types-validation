import { ValidationResponse } from '../../../types/validator/validator.types'
import { ValidatorsErrorMessages } from '../../../error-messages'
import { getClassParameters } from '../../../utils/get-class-parameters/get-class-parameters.utils'

export function validateSchemaValidator (key: string, type: any) {
  return function (value: any): ValidationResponse {
    let valid = true
    const internalMessages: ValidationResponse[] = []
    const properties = getClassParameters(type)
    for (const property of properties) {
      const { key, validator } = property
      const result = validator(key, value?.[key])
      if (!result.valid) {
        valid = false
        internalMessages.push(result)
      }
    }
    return {
      key,
      valid,
      message: ValidatorsErrorMessages.VALIDATE_SCHEMA,
      internalMessages
    }
  }
}
