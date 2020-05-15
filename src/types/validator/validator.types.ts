export type ValidatorResponseError = {
  property: string
  message: string
}

export type ValidatorResponse = {
  errors: ValidatorResponseError[]
}

export type ValidationResponse = {
  valid: boolean
  message?: string
}
