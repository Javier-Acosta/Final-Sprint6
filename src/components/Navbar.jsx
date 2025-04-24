import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const navbarLinks = [

        {
            id: 1,
            title: "Inicio",
            link: "/"

        },

        {
            id: 2,
            title: "Perfiles",
            link: "/profiles"

        },

        {
            id: 3,
            title: "Buscar",
            link: "/buscar"

        },

        {
            id: 4,
            title: "Nosotros",
            link: "/about"

        },
    ]

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                        {/* BURGER BTN */}

                        <button
                            className='md:hidden text-white p-2 cursor-pointer'
                            onClick={toggleMenu}
                        >
                            <svg
                                className='w-6 h6'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24' 
                            >
                                {
                                    isOpen ? (

                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M6 18L18 6M6 6l12 12' 
                                        />
                                    ) : (

                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M4 6h16M4 12h16M4 18h16' 
                                        />
                                    )
                                }

                            </svg>
                        </button>

                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img className="h-10 w-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhd9_Ex7Ydx9zq3UOGPQWisRDk1m5BFhQ4Vw&s" alt="Your Company" />

                        </div>
                        <div className="hidden sm:ml-6 sm:block cursor-pointer">
                            <div className="flex space-x-4">

                                <a onClick={() => navigate('/')}
                                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Home</a>
                                <a onClick={() => navigate('/buscar')}
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Bolsa de Trabajo</a>
                                <a onClick={() => navigate('/profiles')}
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Editar Perfiles</a>
                                <a onClick={() => navigate('/about')}
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        <div className="relative ml-3">
                            <div>
                                <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <img className="size-8 rounded-full" src="https://media.licdn.com/dms/image/v2/C4E03AQHrBLWvDZ-edg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1571196343742?e=2147483647&v=beta&t=_7jXfE4P3Ps22aKHIiMzJb61DZE1gs5Tp1ln3FABgeo" alt="" />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                {/* VISTA MOVILE  */}
                <div>
                    <div className={`md:hidden absolute w-full bg-gray-800 bg-opacity-30 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>

                        <div className='flex flex-col px-4 py-2'>
                            <ul className='flex space-x-4 px-4'>|
                                {navbarLinks.map((link) => (
                                    <li key={link.title} className='py-2 text-center'>
                                        <a href={link.link}
                                            className='text-white hover:text-amber-500 block'
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.title}
                                        </a>
                                    </li>
                                ))}

                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}
export default Navbar