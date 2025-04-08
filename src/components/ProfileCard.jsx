import React from 'react';

const ProfileCard = ({ name, description,direction,phone,avatar, onClick }) => {

    return (
      <div
        onClick={onClick}
        className='flex flex-col items-center cursor-pointer transition-transform hover:scale-105'
      >
        <img
          src={avatar}
          alt='profile'
          className='w-24 h-24 rounded-lg shadow-md'
        />
        <p className='mt-2 text-white text-sm font-semibold'>{name}</p>
        <p className='mt-2 text-white text-sm font-semibold'>{direction}</p>
        <p className='mt-2 text-white text-sm font-semibold'>{description}</p>
        <p className='mt-2 text-white text-sm font-semibold'>{phone}</p>
      </div>
    )
}

export default ProfileCard;
