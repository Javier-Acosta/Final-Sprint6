// components/ProfileSelector.jsx
import React from 'react'
import ProfileCard from '../components/ProfileCard.jsx'
import { useProfiles } from '../contexts/ProfileContext.jsx'
import { useNavigate } from 'react-router-dom'


const ProfileSelector = () => {
  const { profiles } = useProfiles()
  const navigate = useNavigate()

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white'>

      <h1 className='text-4xl font-bold mb-6' >Oficio y Profesión</h1>
         
      <div className='mt-5 flex flex-wrap gap-6 justify-center mx-10 '>
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