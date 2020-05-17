import { ValidatorResponseError } from './validator-errors.types'

export type ValidatorResponse = {
  errors: ValidatorResponseError[]
}

export type ValidationResponse = {
  key: string
  valid: boolean
  message?: string
  internalMessages?: ValidationResponse[]
}
