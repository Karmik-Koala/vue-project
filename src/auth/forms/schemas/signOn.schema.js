import * as Yup from 'yup'
import { PASSWORD_MIN_LENGTH_ERROR_MSG, PASSWORD_ONE_TWO_NOT_MATCH_ERROR_MSG } from '../errors/formErrorMessages'

export const signOnValidationSchema = Yup.object({
  email: Yup.string().email().required(),
  password1: Yup.string().min(6, PASSWORD_MIN_LENGTH_ERROR_MSG ).required(),
  password2: Yup.string().min(6, PASSWORD_ONE_TWO_NOT_MATCH_ERROR_MSG).oneOf([Yup.ref('password1', null)],  PASSWORD_ONE_TWO_NOT_MATCH_ERROR_MSG ).required()
})

