import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProfiles } from '../contexts/ProfileContext'


const ProfileVista = () => {

    const { profiles } = useProfiles()
    const { id } = useParams()
    const navigate = useNavigate()

    const profile = profiles.find((p) => p.id === id)
    console.log('profiles', profile);

    return (
        <div className='text-center mt-10'>
            <img
                src={profile.avatar}
                className='w-24 h-24 rounded-lg shadow-md mx-auto'
            />

            <h1 className='text-3xl font-bold'>{profile.name}</h1>
            <p className='text-gray-400'>{profile.direction}</p>
            <p className='text-gray-400'>{profile.description}</p>
            <p className='text-gray-400'>{profile.phone}</p>
            <button
                onClick={() => navigate('/')}
                className='mt-8 px-6 py-2 font-semibold text-white bg-gray-800 hover:bg-gray-700 rounded-lg'
            >
                Back Home
            </button>
        </div >
    )
}

export default ProfileVista