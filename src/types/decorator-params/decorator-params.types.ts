import { GenericOptions } from '../generic-options/generic-options.types'

export type DecoratorParams = {
  target: Object
  propertyKey: string | symbol
  parameterIndex?: number
  options?: GenericOptions
}
