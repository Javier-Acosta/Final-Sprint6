import { ToastContainer } from "react-toastify"
import { ProfileProvider } from "./contexts/ProfileContext"
import AppRouter from "./Router/AppRouter"
import Navbar from "./components/Navbar"
import { AuthProvider } from "./contexts/AuthContext"

function App() {
  return (
    <ProfileProvider>
      
    
      <Navbar/>
      <AuthProvider>
      <AppRouter />
    </AuthProvider>
      <ToastContainer />
    </ProfileProvider>
  )
}

export default App
