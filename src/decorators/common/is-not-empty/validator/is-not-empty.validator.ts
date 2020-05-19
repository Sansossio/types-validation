import { ValidatorsErrorMessages } from '../../../../error-messages'

export function isNotEmptyValidator (key: string, value) {
  const valid =
    value !== undefined && value !== null && value !== ''
  return {
    key,
    valid,
    description: !valid && ValidatorsErrorMessages.IS_NOT_EMPTY
  }
}
