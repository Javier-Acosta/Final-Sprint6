import React from 'react'
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import ProfileSelector from '../pages/ProfileSelector'
import ProfileDetail from '../pages/ProfileDetail'
import ProfileCreate from '../pages/ProfileCreate'
import ProfileEdit from '../pages/ProfileEdit'
import SearchForm from '../pages/SearchForm'
import ProfileVista from '../pages/ProfileVista'


const AppRouter = () => {
  const navigate = useNavigate()
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profiles' element={<ProfileSelector />} />
        <Route path='/buscar' element={<SearchForm />} />
        <Route path='/vista/:id' element={<ProfileVista />} />
        <Route path='/profiles/:id' element={<ProfileDetail />} />
        <Route path='/profiles/create-profile' element={<ProfileCreate />} />
        <Route path='/profiles/:id/edit' element={<ProfileEdit />} />
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </>
  )
}

export default AppRouter