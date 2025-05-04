import { ToastContainer } from "react-toastify"
import { ProfileProvider } from "./contexts/ProfileContext"
import AppRouter from "./Router/AppRouter"
import { AuthProvider } from "./contexts/AuthContext"
import Navbar from './components/Navbar.jsx'
import { BrowserRouter } from "react-router-dom"


function App() {
  return (
    <ProfileProvider>
        <AuthProvider>
          <BrowserRouter>
            <Navbar />
            <AppRouter />
          </BrowserRouter>
        <ToastContainer />
    </AuthProvider>
      </ProfileProvider>
  )
}

export default App
