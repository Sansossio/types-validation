import { ValidationResponse } from '../../../../types/validator/validator.types'
import { ValidatorResponseError } from '../../../../types/validator/validator-errors.types'
import { parseMessage } from '../../../../utils/parse-message/parse-message.utils'

export function parseInternalMessages (messages: ValidationResponse[]): ValidatorResponseError[] {
  if (!messages) {
    return []
  }
  return messages.map(value => ({
    property: value.key,
    description: parseMessage(value.description, { key: value.key }),
    messages: parseInternalMessages(value.messages)
  }))
}
