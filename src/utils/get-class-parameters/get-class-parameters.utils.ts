import 'reflect-metadata'
import { Config } from '../../config'
import { ClassProperty } from '../../types/class-property/class-property.tpyes'

export function getClassParameters (target: Object): ClassProperty[] {
  return Reflect.getMetadata(Config.GET_CLASS_PROPERTIES, target) || []
}
