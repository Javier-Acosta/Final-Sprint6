import React from 'react';

const ProfileCard = ({ name, description, direction, phone, avatar, onClick }) => {

  return (
    <div
      onClick={onClick}
      className='bg-gray-800 dark:bg-gray-800 rounded-lg px-6 py-8 ring ring-gray-900/5 shadow-xl max-w-64 flex flex-col items-center cursor-pointer transition-transform hover:scale-105 '
    >
      <img
        src={avatar}
        alt='profile'
        className='w-24 h-24 rounded-lg shadow-md'
      />
      <p className='mt-2 text-white text-sm font-semibold'>{name}</p>
      <p className='text-blue-600 dark:text-sky-400 mt-2 text-white text-2xl font-semibold '>{direction}</p>
      <p className='overflow-hidden text-clip italic mt-2 text-white text-sm font-semibold'>{description}</p>
      <p className='mt-2 text-white text-sm font-semibold'>{phone}</p>
    </div>
  )
}

export default ProfileCard;
