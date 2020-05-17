import { ValidationResponse } from '../validator/validator.types'

export type MethodPropertyValidator = (key: string | symbol, value: any) => ValidationResponse
