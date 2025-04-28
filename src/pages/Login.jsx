import React, { Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { Login } = useAuth()
    const navigate= useNavigate()
    const onSubmit = async (data) => {
       const success =await Login(data.email, data.password)
       console.log(success)
       if (success) {
        navigate('/busqueda')
        
       }else{
        alert('Invalid Credencials')
       }
       

    }
    return (
        <div className='max-w-md mx-auto mt-10 bg-white p-6 shadow rounded'>
            <h1 className='text-2xl font-bold mb-4'>Iniciar Sesion </h1>
            <form onSubmit={handleSubmit(onSubmit)} className=' space-y-4'>
                <input
                    {...register('email', { required: "Email Requerido" })}
                    type='email'
                    className='w-full border p-2 rounded'
                />
                {errors.email && <p className='text-red-500 text-sm' > {errors.email.message}</p>}

                <input
                    {...register('password', { required: "Password Requerido" })}
                    type='password'
                    className='w-full border p-2 rounded'
                />
                {errors.password && <p className='text-red-500 text-sm' > {errors.password.message}</p>}

                <button
                    type="submit"
                    className='w-full bg-blue-500 text-white p-2 rounded'
                >
                    Iniciar sesion
                </button>

            </form>
        </div>
    );
}

export default Login;
