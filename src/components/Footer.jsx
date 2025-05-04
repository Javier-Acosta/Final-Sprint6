import React from 'react'

const Footer = () => {
  return (
    <div>

      <footer className="bg-dark-secondary py-4 px-6 flex items-center justify-center  bg-gray-900 text-white ">
        <div className="w-full max-w-6xl flex flex-col items-center space-y-4 text-center">
          <p className="text-text-secondary text-sm">
            DIPLOMATURA UNIVERSITARIA DESARROLLO WEB FULL STACK CON JAVASCRIPT
          </p>

          <a href="https://github.com/Javier-Acosta" target="_blank"
            className="flex items-center space-x-2 text-accent-teal hover:text-button-primary-hover transition-colors duration-300">
            <i className="ph ph-github-logo text-2xl"></i>
            <span className="font-['Orbitron'] text-sm">https://github.com/Javier-Acosta</span>
          </a>

          <p className="text-text-secondary text-sm">
            &copy; <span id="currentYear"></span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer