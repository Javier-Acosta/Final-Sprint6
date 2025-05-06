import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const MySwal = withReactContent(Swal)

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { user, login } = useAuth()
    const navigate = useNavigate()

    if (user) return <Navigate to="/buscar" />

    const onSubmit = async (data) => {
        const success = await login(data.email, data.password)
        if (success) {
            navigate('/buscar')

        } else {
            MySwal.fire({
                title: <strong>Error</strong>,
                html: <i>Usuario o contraseña incorrectos</i>,
                icon: 'error',
                confirmButtonText: 'Aceptar',
                customClass: {
                    confirmButton: 'bg-blue-500 text-white rounded px-4 py-2'
                },
            })
        }
    }
    
    return (
        <div className='min-h-screen flex flex-col items-center  bg-gray-900 text-white  shadow-xl  px-6 py-8 ring ring-gray-900/5 '>
            <h1 className='text-2xl font-bold mb-4 flex flex-col items-center '>Iniciar Sesión </h1>
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
