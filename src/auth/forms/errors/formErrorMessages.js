import { PASSWORD_LENGTH } from "../constants/restrictions"
export const REQUIRED_EMAIL_ERROR_MSG = "Email field is mandatory."
export const WRONG_EMAIL_FORMAT_ERROR_MSG = "You must enter a valid email such as jondoe@mailprovider.com"
export const REQUIRED_PASSWORD_ERROR_MSG = "Password field is mandatory."
export const PASSWORD_MIN_LENGTH_ERROR_MSG = `Password should have ${PASSWORD_LENGTH} characters at least.`
export const PASSWORD_ONE_TWO_NOT_MATCH_ERROR_MSG = "Passwords do not match"