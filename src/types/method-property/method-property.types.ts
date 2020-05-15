import { ValidationResponse } from '../validator/validator.types'

export type MethodProperty = {
  validator: (value) => ValidationResponse
  index: number
  key: string
}
