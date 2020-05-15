import 'reflect-metadata'
import { Config } from '../../config'
import { MethodProperty } from '../../types/method-property/method-property.types'

export function getProperties (target: Object, propertyKey: string | symbol): MethodProperty[] {
  return Reflect.getOwnMetadata(Config.GET_PROPERTIES, target, propertyKey) || []
}
