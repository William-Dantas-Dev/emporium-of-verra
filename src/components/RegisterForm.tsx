import { createUser } from '@/controllers/user.controller';
import { ErrorMessage } from '@/interfaces';
import { RegisterFormProps } from '@/typesProps';
import React, { useState } from 'react';


const RegisterForm = ( onSwitchToLogin : RegisterFormProps) => {
  const [name, setName] = useState('');
  const [nick, setNick] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await createUser({
      name: name,
      nick: nick,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
    
    if(response?.type === "Error"){
      let formErrors: { [key: string]: string } = {};
      let error;
      if(error = handleFilter(response.errors, "name")){
        formErrors.name = error.message;
      }
      if(error = handleFilter(response.errors, "email")){
        formErrors.email = error.message;
      }
      if(error = handleFilter(response.errors, "nick")){
        formErrors.nick = error.message;
      }
      if(error = handleFilter(response.errors, "password")){
        formErrors.password = error.message;
      }
      if(error = handleFilter(response.errors, "confirmPassword")){
        formErrors.confirmPassword = error.message;
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
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Nick</label>
          <input
            type="text"
            value={nick}
            onChange={(e) => setNick(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.nick && <p className="text-red-500">{errors.nick}</p>}
        </div>
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
        <div className="mb-4">
          <label className="block mb-2">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Register
        </button>
      </form>
      <button className="mt-4 text-blue-500" onClick={() => onSwitchToLogin}>
        Already have an account? Login
      </button>
    </div>
  );
};

export default RegisterForm;
