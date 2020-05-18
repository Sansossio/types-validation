import { MethodPropertyValidator } from './method-property.validator.types'
import { DecoratorParams } from '../decorator-params/decorator-params.types'

export type MethodProperty = {
  validator: MethodPropertyValidator
  index: number
  key: string
  params: DecoratorParams
}
