import { MethodProperty } from '../../types/method-property/method-property.types'
import { ValidatorResponseError } from '../../types/validator/validator.types'
import { parseMessage } from '../../utils/parse-message/parse-message.utils'
import { ValidationException } from '../../errors/validation-exception.error'

export function validateProperties (properties: MethodProperty[], args: IArguments | any[]): void {
  const errors: ValidatorResponseError[] = []
  for (const property of properties) {
    const value = args[property.index]
    const { valid, message } = property.validator(value)
    if (!valid) {
      const { key } = property
      errors.push({
        property: key,
        message: parseMessage(message, { key })
      })
    }
  }
  if (errors.length > 0) {
    throw new ValidationException(errors)
  }
}
