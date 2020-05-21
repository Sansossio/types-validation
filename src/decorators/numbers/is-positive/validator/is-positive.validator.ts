import { ValidatorsErrorMessages } from '../../../../error-messages'

export function isPositiveNumberValidator (key: string, value: any) {
  const valid = typeof value === 'number' && value > 0
  return {
    key,
    valid,
    description: !valid && ValidatorsErrorMessages.IS_POSITIVE
  }
}
