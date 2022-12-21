import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8,'').matches(/^(?![\d+_@.-]+$)[a-zA-Z0-9+_@.-]*$/).required()
})