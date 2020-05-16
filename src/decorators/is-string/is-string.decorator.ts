import { isStringValidator } from './validator/is-string.validator'
import { baseDecorator } from '../base/base.decorator'

export const IsString = baseDecorator(isStringValidator)
