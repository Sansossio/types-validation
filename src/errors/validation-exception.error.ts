import { ValidatorResponseError } from '../types/validator/validator-errors.types'

export class ValidationException extends Error {
  message = `Invalid parameters \n ${this.parseErrors()}`
  constructor (
    readonly errors: ValidatorResponseError[]
  ) {
    super()
    Object.setPrototypeOf(this, ValidationException.prototype)
  }

  private parseErrors () {
    return JSON.stringify(this.errors, null ,2)
  }
}
