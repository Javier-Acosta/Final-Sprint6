import { useForm } from 'react-hook-form';

export default function UserForm({ onSubmit, defaultValues }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <div className='min-h-screen  bg-gray-900 text-white  shadow-xl  px-6 py-8 ring ring-gray-900/5 '>
 <h1 className='text-2xl font-bold mb-4 flex flex-col items-center justify-center'>Registrar </h1>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto shadow p-6 rounded space-y-4 bg-gray-900 text-white"
    >
      <div>
        <label className="block mb-1 font-semibold">Nombre</label>
        <input
          {...register('username', { required: 'El nombre es obligatorio' })}
          className="w-full border p-2 rounded"
          />
        {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
      </div>

      {/* add alter ego (ver el modelo en el back) */}
      <div>
        <label className="block mb-1 font-semibold">Email</label>
        <input
          {...register('email', { required: 'El poder es obligatorio' })}
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block mb-1 font-semibold">Password</label>
        <input
          {...register('password', { required: 'El poder es obligatorio' })}
          className="w-full border p-2 rounded"
          type='password'
          />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>


      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Enviar
      </button>
    </form>
          </div>
  );
}