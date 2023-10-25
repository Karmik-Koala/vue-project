import * as Yup from 'yup'
import { PASSWORD_MIN_LENGTH_ERROR_MSG, PASSWORD_ONE_TWO_NOT_MATCH_ERROR_MSG, REQUIRED_EMAIL_ERROR_MSG, REQUIRED_PASSWORD_ERROR_MSG, WRONG_EMAIL_FORMAT_ERROR_MSG } from '../errors/formErrorMessages'
import { PASSWORD_LENGTH } from '../constants/restrictions'

export const signOnValidationSchema = Yup.object({
  email: Yup.string().email(WRONG_EMAIL_FORMAT_ERROR_MSG).required(REQUIRED_EMAIL_ERROR_MSG),
  password1: Yup.string().min(PASSWORD_LENGTH, PASSWORD_MIN_LENGTH_ERROR_MSG).required(REQUIRED_PASSWORD_ERROR_MSG),
  password2: Yup.string().min(PASSWORD_LENGTH, PASSWORD_ONE_TWO_NOT_MATCH_ERROR_MSG).oneOf([Yup.ref('password1')], PASSWORD_ONE_TWO_NOT_MATCH_ERROR_MSG).required(REQUIRED_PASSWORD_ERROR_MSG)
})

