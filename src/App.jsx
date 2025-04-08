import { useState } from 'react'
import { Home } from './components/Home'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import NotFound from './components/NotFound'


// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// video1 1:41

function App() {

  return (

    <Routes>

      <Route path='/about' element={<About />} />

      <Route path='/' element={<Home />} />

      <Route path='/nested-route' element={<Dashboard />} />
      <Route path='/not' element={<NotFound />} />
    </Routes>

  )
}

export default App
