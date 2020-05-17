export type ValidatorResponseError = {
  property: string
  message: string
  internalMessages?: ValidatorResponseError[]
}
