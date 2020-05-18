import { MethodPropertyValidator } from '../method-property/method-property.validator.types'
import { DecoratorParams } from '../decorator-params/decorator-params.types'

export type ClassProperty = {
  key: string | symbol
  validator: MethodPropertyValidator
  params?: DecoratorParams
}
