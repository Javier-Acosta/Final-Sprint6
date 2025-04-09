import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProfileContext = createContext()

export const useProfiles = () => useContext(ProfileContext)

const API = "https://67efcb152a80b06b8895c767.mockapi.io/api/v1/profile"

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchProfiles = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(API)
      setProfiles(data)
    } catch (error) {
      console.error("Error al hacer el fetch a profiles", error)
    } finally {
      setLoading(false)
    }
  }

  // Busqueda
  const getPersonajes = async (name) => {
    toast.info('Buscando Personajes...')
    setLoading(true)
    setError(null)
    try {
        const data = await fetchData(name)
        console.log('desde context', data.data.results);
        setProfiles(data)
        toast.success(' Data featched successfully ')
    } catch (error) {
        toast.error(`No se encontró Personajes ${error}`)
        setProfiles(null)
    } finally {
        setLoading(false)
    }
}



  // POST fn
  const createProfile = async (profile) => {
    const { data } = await axios.post(API, profile)
    console.log('data -> ', data)
    setProfiles((prev) => [...prev, data])
  }

  // PUT fn
  const updateProfile = async (id, updatedData) => {
    const { data } = await axios.put(`${API}/${id}`, updatedData)
    setProfiles((prev) =>
      prev.map((profile) => (profile.id === id ? data : profile))
    )
  }

  // DELETE fn
  const deleteProfile = async (id) => {
    await axios.delete(`${API}/${id}`)
    setProfiles((prev) => prev.filter((profile) => profile.id !== id))
  }

  useEffect(() => {
    fetchProfiles()
  }, [])

  return (
    <ProfileContext.Provider value={{ profiles, loading, getPersonajes, createProfile, updateProfile, deleteProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}