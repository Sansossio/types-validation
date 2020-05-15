import 'reflect-metadata'
import { MethodProperty } from '../../types/method-property/method-property.types'
import { isStringValidator } from '../../validators/is-string/is-string.validator'
import { setProperty } from '../../utils/set-property/set-property.utils'
import { getParameters } from '../../utils/get-parameters/get-parameters.utils'

export function IsString () {
  return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
    const registerProperty: MethodProperty = {
      index: parameterIndex,
      validator: isStringValidator,
      key: getParameters(target[propertyKey])[parameterIndex]
    }
    const key = Reflect.getMetadata('design:paramtypes', target, propertyKey)
    setProperty(registerProperty, target, propertyKey)
  }
}
