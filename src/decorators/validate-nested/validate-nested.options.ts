import { GenericOptions } from '../../types/generic-options/generic-options.types'

export type ValidateSchemaOptions = GenericOptions & {
  /**
   * Schema to validate
   */
  type?: any
  /**
   * Validate each value (array)
   */
  each?: boolean
}
