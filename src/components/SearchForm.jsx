import React from 'react'
import { useProfiles } from '../contexts/ProfileContext'

import ProfileServicio from './ProfileServicio'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {
    const { profiles } = useProfiles()
    const navigate = useNavigate()


    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-black/90 text-white'>

            <h1 className='text-2xl font-bold mb-6' >Filtrado por Profesión</h1>



            {/* contededor de cards */}
            <div className='mt-5 flex flex-wrap gap-6 justify-center mx-10'>
                {profiles.map((profile) => (
                    <ProfileServicio
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

export default SearchForm