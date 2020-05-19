import { ValidationResponse } from '../validator/validator.types'

export type MethodPropertyValidator = (key: string, value: any) => ValidationResponse
