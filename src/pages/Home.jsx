import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>

      <div className="bg-gray-900 text-gray-200 min-h-screen">
        
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">Bolsa de Trabajo  </h1> <span className='italic  text-2xl text-white'>Catamarca</span>
              <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">plataforma que conecta a personas que buscan empleo en la provincia de Catamarca, es de libre acceso para todo el publico en general.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a onClick={() => navigate('/buscar')} className="cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Ir a Todos</a>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          </div>
        </div>
      </div>
    </>

  )
}

export default Home