"use client";
import { ErrorMessage } from '@/interfaces';
import { authValidation } from '@/validations/auth.validation';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { SyntheticEvent, useState } from 'react'
import { ValidationError } from 'yup';
import CustomFormInput from './CustomFormInput';

const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string] : string }>({});

  const router = useRouter();

  async function handleSubmit(event: SyntheticEvent){
    event.preventDefault();
    try{
      await authValidation.validate({ email, password }, { strict: true, abortEarly: false});
      const result = await signIn('credentials', {
        email,
        password,
        type: 'login',
        redirect: false,
      })
      if(result?.error){
        let formErrors: { [key: string]: string } = {};
        formErrors.apiError = `${result.error}`;
        setErrors(formErrors);
        return;
      }
      router.replace('/admin');
    }catch (e : any) {
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
      let formErrors: { [key: string]: string } = {};
      let error;
      if(error = handleFilter(errors, "email")){
        formErrors.email = error.message;
      }
      if(error = handleFilter(errors, "password")){
        formErrors.password = error.message;
      }
      setErrors(formErrors);
    }
  }


  const handleFilter = (errors: ErrorMessage[], value : string) => {
    return errors.find(error => error.name === value);
  }

  return (
    <div className="flex h-full w-full flex-col my-auto">
      <h2 className="text-center text-2xl font-bold tracking-tight text-white">Sign in to your account</h2>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
        {errors.apiError && <p className="text-red-500">{errors.apiError}</p>}
          <CustomFormInput title='email' type="email" placeholder="Email" error={errors.email} onChange={(value) => setEmail(value)}/>
          <CustomFormInput title='password' type="password" placeholder="Password" error={errors.password} onChange={(value) => setPassword(value)}/>
          <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 pl-1">Register Here</a>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
