import 'reflect-metadata'
import { MethodProperty } from '../../types/method-property/method-property.types'
import { getFunctionParameters } from '../get-func-parameters/get-func-parameters.utils'
import { Config } from '../../config'

export function setFunctionProperty (value: MethodProperty, target: Object, propertyKey: string | symbol) {
  const properties = getFunctionParameters(target, propertyKey)
  properties.push(value)
  Reflect.defineMetadata(Config.GET_PARAMETERS, properties, target, propertyKey)
}
