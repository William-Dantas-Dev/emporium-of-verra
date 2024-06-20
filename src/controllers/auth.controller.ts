import { ValidationError } from 'yup';
import { ErrorMessage } from '@/interfaces';
import { AuthUserProps } from '@/typesProps';
import { authValidation } from '@/validations/auth.validation';
import { authUser } from '@/repositories/auth.repository';

export const auth = async(user : AuthUserProps) => {
  try{
    await authValidation.validate(user, { strict: true, abortEarly: false});
    authUser(user);
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