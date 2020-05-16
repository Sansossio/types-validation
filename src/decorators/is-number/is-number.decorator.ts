import { isNumberValidator } from './validator/is-number.validator'
import { baseDecorator } from '../base/base.decorator'

export const IsNumber = baseDecorator(isNumberValidator)
