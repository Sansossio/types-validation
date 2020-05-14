import { PropertyDecoratorImplementation } from './types/property-decorator.implementation.type'
import { PropertyDecoratorOptions } from './types/property-decorator.options.type'

export function propertyDecorator (implementation: PropertyDecoratorImplementation) {
  return function (options: PropertyDecoratorOptions) {
    return implementation
  }
}
