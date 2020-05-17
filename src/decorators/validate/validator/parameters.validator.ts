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
    description: parseMessage(value.description, { key: value.key }),
    messages: parseInternalMessages(value.messages)
  }))
}

export function validateParameters (properties: MethodProperty[], args: IArguments | any[]): void {
  const errors: ValidatorResponseError[] = []
  for (const property of properties) {
    const value = args[property.index]
    const { valid, description: message, messages: internalMessages = [] } = property.validator(property.key, value)
    if (!valid) {
      const { key } = property
      errors.push({
        property: key,
        description: parseMessage(message, { key }),
        messages: parseInternalMessages(internalMessages)
      })
    }
  }
  if (errors.length > 0) {
    throw new ValidationException(errors)
  }
}
