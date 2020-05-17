import { MethodProperty } from '../../../types/method-property/method-property.types'
import { ValidatorResponseError } from '../../../types/validator/validator-errors.types'
import { parseMessage } from '../../../utils/parse-message/parse-message.utils'
import { ValidationException } from '../../../errors/validation-exception.error'
import { ValidationResponse } from '../../../types/validator/validator.types'

function parseInternalMessages (messages: ValidationResponse[]): ValidatorResponseError[] {
  if (!messages) {
    return []
  }
  return messages.map(value => ({
    property: value.key,
    message: parseMessage(value.message, { key: value.key }),
    internalMessages: parseInternalMessages(value.internalMessages)
  }))
}

export function validateParameters (properties: MethodProperty[], args: IArguments | any[]): void {
  const errors: ValidatorResponseError[] = []
  for (const property of properties) {
    const value = args[property.index]
    const { valid, message, internalMessages = [] } = property.validator(property.key, value)
    if (!valid) {
      const { key } = property
      errors.push({
        property: key,
        message: parseMessage(message, { key }),
        internalMessages: parseInternalMessages(internalMessages)
      })
    }
  }
  if (errors.length > 0) {
    throw new ValidationException(errors)
  }
}
