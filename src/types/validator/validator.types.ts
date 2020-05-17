import { ValidatorResponseError } from './validator-errors.types'

export type ValidatorResponse = {
  errors: ValidatorResponseError[]
}

export type ValidationResponse = {
  key: string
  valid: boolean
  description?: string
  messages?: ValidationResponse[]
}
