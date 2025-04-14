import React from 'react';
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate()
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col items-center justify-center">
      
      <article>
        {/* <img class="float-left ..." src="/img/mountains.jpg" /> */}
        <p className='text-wrap  uppercase'>El equipo de desarrolladores, crearon este sitio web, con el objetivo de que cualquier persona puede postularse para conseguir trabajo, publicando sus datos y numero de contacto....</p>
      </article>

    </div>
  )
}

export default About;
