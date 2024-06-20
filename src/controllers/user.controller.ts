import { ValidationError } from 'yup';
import { CreateUserProps } from '@/typesProps';
import { userValidation } from '@/validations/user.validation';
import { ErrorMessage } from '@/interfaces'
import { registerUser } from '@/repositories/user.repository';

export const createUser = async(user : CreateUserProps) => {
  try{
    await userValidation.validate(user, { strict: true, abortEarly: false});
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