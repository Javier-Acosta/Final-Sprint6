// components/ProfileSelector.jsx
import React from 'react'
import ProfileCard from './ProfileCard.jsx'
import { useProfiles } from '../contexts/ProfileContext.jsx'
import { useNavigate } from 'react-router-dom'

const ProfileSelector = () => {
  const { profiles } = useProfiles()

  const navigate = useNavigate()

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-black/90 text-white'>

      <h1 className='text-2xl font-bold mb-6' >Servicios Genereales</h1>
        {/* add profile component */}
        <div onClick={() => navigate('/profiles/create-profile')} className='bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring ring-gray-900/5 shadow-xl max-w-64 flex flex-col items-center cursor-pointer transition-transform hover:scale-105'>
          <div className='w-24 h-24 flex items-center justify-center bg-gray-700 rounded-lg shadow-md'>
            <span className='text-4xl font-bold' >+</span>
          </div>
          <p className='mt-2 text-sm font-semibold'>Suscríbete</p>
        </div>

      {/* contededor de cards */}
      <div className='mt-5 flex flex-wrap gap-6 justify-center mx-10'>
        {profiles.map((profile) => (
          <ProfileCard 
            key={profile.id} 
            name={profile.name} 
            avatar={profile.avatar}
            description={profile.description}
            direction={profile.direction}
            phone={profile.phone}
            onClick={() => navigate(`/profiles/${profile.id}`)}
          />
        ))}


      </div>

      <button onClick={() => navigate('/')} className='mt-8 px-6 py-2 font-semibold bg-gray-800 hover:bg-gray-700 rounded-lg'>
        Volver a Inicio
      </button>
     

    </div>
  )
}

export default ProfileSelector