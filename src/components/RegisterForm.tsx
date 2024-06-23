"use client";
import { ErrorMessage } from '@/interfaces';
import { registerValidation } from '@/validations/auth.validation';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { SyntheticEvent, useState } from 'react'
import { ValidationError } from 'yup';
import CustomFormInput from './CustomFormInput';

const RegisterForm = () => {
  const [name, setName] = useState<string>('');
  const [nick, setNick] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string] : string }>({});

  const router = useRouter();

  async function handleSubmit(event: SyntheticEvent){
    event.preventDefault();
    try{
      await registerValidation.validate({ name, nick, email, password, confirmPassword }, { strict: true, abortEarly: false});
      const result = await signIn('credentials', {
        name,
        nick,
        email,
        password,
        type: 'register',
        redirect: false,
      })
      if(result?.error){
        const errorMessage = result.error === 'email' ? 'E-mail already registered' : 'Failed to Register User';
        let formErrors: { [key: string]: string } = {};
        formErrors.apiError = `${errorMessage}`;
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
      if(error = handleFilter(errors, "name")){
        formErrors.name = error.message;
      }
      if(error = handleFilter(errors, "nick")){
        formErrors.nick = error.message;
      }
      if(error = handleFilter(errors, "email")){
        formErrors.email = error.message;
      }
      if(error = handleFilter(errors, "password")){
        formErrors.password = error.message;
      }
      if(error = handleFilter(errors, "confirmPassword")){
        formErrors.confirmPassword = error.message;
      }
      setErrors(formErrors);
    }
  }


  const handleFilter = (errors: ErrorMessage[], value : string) => {
    return errors.find(error => error.name === value);
  }

  return (
    <div className="flex h-full w-full flex-col my-auto">
      <h2 className="text-center text-2xl font-bold tracking-tight text-white">Register Your Account</h2>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {errors.apiError && <p className="text-red-500">{errors.apiError}</p>}
          <CustomFormInput title='name' type="text" placeholder="Name" error={errors.name} onChange={(value) => setName(value)}/>
          <CustomFormInput title='nick' type="text" placeholder="Nick" error={errors.nick} onChange={(value) => setNick(value)}/>
          <CustomFormInput title='email' type="email" placeholder="Email" error={errors.email} onChange={(value) => setEmail(value)}/>
          <CustomFormInput title='password' type="password" placeholder="Password" error={errors.password} onChange={(value) => setPassword(value)}/>
          <CustomFormInput title='confirmPassword' type="password" placeholder="Confirm Password" error={errors.confirmPassword} onChange={(value) => setConfirmPassword(value)}/>
          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Always Have Account?
          <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 pl-1">Login Here</a>
        </p>
      </div>
    </div>
  )
}

export default RegisterForm
