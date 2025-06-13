import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProfiles } from '../contexts/ProfileContext'
import { toast } from 'react-toastify'

const ProfileCreate = () => {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [description, setDescription] = useState('')
  const [direction, setDirection] = useState('')
  const [phone, setPhone] = useState('')

  const navigate = useNavigate()
  const { createProfile } = useProfiles()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (name.trim() === '' || avatar.trim() === '' || description.trim() === '' || direction.trim() === '' || phone.trim() === '') {
      // setError('Please fill in all fields')
      toast.error('Please fill in all fields')
      return
    }

    try {
      await createProfile({ name, avatar, description, direction, phone })
      navigate('/profiles')
      toast.success('Perfil creado successfully')
    } catch (err) {
      toast.error('Error creating profile')
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-900 text-gray-200'>
      <div className='max-w-md w-full p-6 rounded'>
        <h2 className='text-2xl font-bold text-center text-white mb-4'>
          Crea Perfil de Profesión
        </h2>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-4'
        >
          <input
            type='text'
            placeholder='Nombre'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='p-2 rounded bg-gray-700 text-white'
          />
          <input
            type='text'
            placeholder='URL Avatar'
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            className='p-2 rounded bg-gray-700 text-white'
          />
          <input
            type='text'
            placeholder='Tú Profesión'
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            className='p-2 rounded bg-gray-700 text-white'
          />
          <input
            type='text'
            placeholder='Descripcióin'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='p-2 rounded bg-gray-700 text-white'
          />
          <input
            type='text'
            placeholder='Número de Contacto'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className='p-2 rounded bg-gray-700 text-white'
          />
          <button
            type='submit'
            className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200'
          >
            Crea Perfil
          </button>

          <button
            onClick={() => navigate('/profiles')}
            className='bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition duration-200'
          >
            Volver a todos
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProfileCreate