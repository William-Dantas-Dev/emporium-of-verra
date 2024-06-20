import { auth } from '@/controllers/auth.controller';
import { ErrorMessage } from '@/interfaces';
import { LoginFormProps } from '@/typesProps'
import React, { useState } from 'react'

const LoginForm = ({ onSwitchToRegister } : LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await auth({
      email: email,
      password: password,
    });
    
    if(response?.type === "Error"){
      let formErrors: { [key: string]: string } = {};
      let error;
      console.log(response.errors);
      if(error = handleFilter(response.errors, "email")){
        formErrors.email = error.message;
      }
      if(error = handleFilter(response.errors, "password")){
        formErrors.password = error.message;
      }
      setErrors(formErrors);
    }else{

    }
  };

  const handleFilter = (errors: ErrorMessage[], value : string) => {
    return errors.find(error => error.name === value);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Login
        </button>
      </form>
      <button
        className="mt-4 text-blue-500"
        onClick={onSwitchToRegister}
      >
        Don't have an account? Register
      </button>
    </div>
  )
}

export default LoginForm
