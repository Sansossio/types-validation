import { ClassProperty } from '../../../../types/class-property/class-property.tpyes'
import { ValidationResponse } from '../../../../types/validator/validator.types'

export function validateNestedCallValidators (properties: ClassProperty[], messages: ValidationResponse[], value: any, index?: number) {
  for (const property of properties) {
    const { key, validator } = property
    const propertyKey = typeof index === 'number' ? `${key}[${index}]` : key
    const result = validator(propertyKey, value?.[key])
    if (!result.valid) {
      messages.push(result)
    }
  }
}
