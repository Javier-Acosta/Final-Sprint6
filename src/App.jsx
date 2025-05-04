import { ToastContainer } from "react-toastify"
import { ProfileProvider } from "./contexts/ProfileContext"
import AppRouter from "./Router/AppRouter"
import { AuthProvider } from "./contexts/AuthContext"
import Navbar from './components/Navbar.jsx'
import { BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer.jsx"


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
    <Footer/>
      </ProfileProvider>
  )
}

export default App
