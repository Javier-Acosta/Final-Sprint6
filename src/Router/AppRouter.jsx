import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import ProfileSelector from '../pages/ProfileSelector'
import ProfileDetail from '../pages/ProfileDetail'
import ProfileCreate from '../pages/ProfileCreate'
import ProfileEdit from '../pages/ProfileEdit'
import SearchForm from '../pages/SearchForm'
import ProfileVista from '../pages/ProfileVista'
import Login from '../pages/Login'
import PrivateRoute from './PrivateRoute'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profiles'
          element={
            <PrivateRoute>
              <ProfileSelector />
            </PrivateRoute>
          }
        />

        <Route path='/buscar' element={<SearchForm />} />

        <Route path='/vista/:id'
          element={
            <PrivateRoute>
              <ProfileVista />
            </PrivateRoute>
          }
        />

        <Route path='/profiles/:id'
          element={
            <PrivateRoute>
              <ProfileDetail />
            </PrivateRoute>
          }
        />

        <Route path='/profiles/create-profile'
          element={
            <PrivateRoute>
              <ProfileCreate />
            </PrivateRoute>
          }
        />

        <Route path='/profiles/:id/edit'
          element={
            <PrivateRoute>
              <ProfileEdit />
            </PrivateRoute>

          }
        />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </>
  )
}

export default AppRouter