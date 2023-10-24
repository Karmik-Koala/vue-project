import * as Yup from 'yup'
import { PASSWORD_MIN_LENGTH_ERROR_MSG, REQUIRED_EMAIL_ERROR_MSG } from '../errors/formErrorMessages'
import { PASSWORD_LENGTH } from '../constants/restrictions'

export const signInValidationSchema = Yup.object({
  email: Yup.string().email().required(REQUIRED_EMAIL_ERROR_MSG),
  password: Yup.string().min(PASSWORD_LENGTH, PASSWORD_MIN_LENGTH_ERROR_MSG).required()
})