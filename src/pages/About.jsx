import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-900 text-gray-200 ">
      <div className="flex flex-col pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl">Bolsa de Trabajo</h1>
            <p className="mt-4 text-xl font-medium text-white sm:text-xl/8">El equipo de desarrolladores, diseñaron este sitio web, con el objetivo de que cualquier persona puede postularse para conseguir trabajo, publicando sus datos y numero de contacto....</p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a onClick={() => navigate('/')} className="cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Inicio</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About;
