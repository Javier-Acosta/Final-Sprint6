import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProfiles } from '../contexts/ProfileContext'
import {toast} from 'react-toastify'

const ProfileEdit = () => {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [description, setDescription] = useState('')
  const [direction, setDirection] = useState('')
  const [phone, setPhone] = useState('')

  const navigate = useNavigate()
  const { profiles, updateProfile } = useProfiles()
  const { id } = useParams()

  useEffect(() => {
    const currentProfile = profiles.find((profile) => profile.id === id)
    if (currentProfile) {
      setName(currentProfile.name)
      setAvatar(currentProfile.avatar)
      setDescription(currentProfile.description)
      setDirection(currentProfile.direction)
      setPhone(currentProfile.phone)
    }
  }, [profiles, id])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (name.trim() === '' || avatar.trim() === '' || description.trim() === '' || direction.trim() === '' || phone.trim() === '') {
      toast.error('Please fill in all fields')
      return
    }

    try {
      await updateProfile(id, { name, avatar, description, direction, phone })
      navigate(`/profiles/${id}`)
      toast.success('Perfil editado successfully')
    } catch (err) {
      
      toast.error('Error updating profile')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200">
      <div className="max-w-md w-full bg-gray-800 p-6 rounded">
        <h2 className="text-2xl font-bold text-white mb-4">Editar perfil</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="text"
            placeholder="URL del avatar"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="text"
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white caret-pink-500 "
          />
          <input
            type="text"
            placeholder="Número de contacto"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="text"
            placeholder="Tú profesión"
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white p-2 rounded">
            Guardar cambios
          </button>
          <button onClick={() => navigate('/profiles')} className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded">
            Volver a la lista de perfiles
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProfileEdit