import { ValidationError } from 'yup';
import { CreateUserProps } from '@/typesProps';
import { ErrorMessage } from '@/interfaces'
import { registerUser } from '@/repositories/user.repository';
import { registerValidation } from '@/validations/auth.validation';

export const createUser = async(user : CreateUserProps) => {
  try{
    await registerValidation.validate(user, { strict: true, abortEarly: false});
    registerUser(user);
  }catch (e) {
    let errors: ErrorMessage[] = [];
    if (e instanceof ValidationError) {
      e.inner.forEach(error => {
        const errorObject: ErrorMessage = {
          name: error.path || '',
          message: error.message,
        }
        errors.push(errorObject);
      });
    } else {
      console.error('Unexpected error:', e);
    }
    return {
      type: "Error",
      errors: errors,
    };
  }
};