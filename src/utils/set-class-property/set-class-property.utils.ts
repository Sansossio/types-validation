import 'reflect-metadata'
import { Config } from '../../config'
import { ClassProperty } from '../../types/class-property/class-property.tpyes'
import { getClassParameters } from '../get-class-parameters/get-class-parameters.utils'

export function setClassPropertyMetadata (value: ClassProperty, target: Object, propertyKey: string | symbol) {
  const properties = getClassParameters(target, propertyKey)
  properties.push(value)
  Reflect.defineMetadata(Config.GET_CLASS_PROPERTIES, properties, target, propertyKey)
}
