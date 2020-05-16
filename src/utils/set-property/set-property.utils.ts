import 'reflect-metadata'
import { MethodProperty } from '../../types/method-property/method-property.types'
import { getParameters } from '../get-parameters/get-parameters.utils'
import { Config } from '../../config'

export function setProperty (value: MethodProperty, target: Object, propertyKey: string | symbol) {
  const properties = getParameters(target, propertyKey)
  properties.push(value)
  Reflect.defineMetadata(Config.GET_PARAMETERS, properties, target, propertyKey)
}
