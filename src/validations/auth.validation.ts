import * as yup from "yup";

export const authValidation = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(12, 'Password cannot be longer than 20 characters'),
});