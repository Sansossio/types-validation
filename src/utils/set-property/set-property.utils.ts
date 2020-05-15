import 'reflect-metadata'
import { MethodProperty } from '../../types/method-property/method-property.types'
import { getProperties } from '../get-properties/get-properties.utils'
import { Config } from '../../config'

export function setProperty (value: MethodProperty, target: Object, propertyKey: string | symbol) {
  const properties = getProperties(target, propertyKey)
  properties.push(value)
  Reflect.defineMetadata(Config.GET_PROPERTIES, properties, target, propertyKey)
}
