import { MethodPropertyValidator } from '../method-property/method-property.validator.types'

export type ClassProperty = {
  key: string | symbol
  validator: MethodPropertyValidator
}
