import { GenericOptions } from '../../types/generic-options/generic-options.types'

export type ValidateSchemaOptions = GenericOptions & {
  type?: any
  /**
   * Validate each value (array)
   */
  each?: boolean
}
