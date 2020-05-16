import { ValidatorResponseError } from './validator-errors.types'

export type ValidatorResponse = {
  errors: ValidatorResponseError[]
}

export type ValidationResponse = {
  valid: boolean
  message?: string | string[]
}
