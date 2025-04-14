import { ToastContainer } from "react-toastify"
import { ProfileProvider } from "./contexts/ProfileContext"
import AppRouter from "./Router/AppRouter"
import Navbar from "./components/Navbar"

function App() {
  return (
    <ProfileProvider>
      <Navbar/>
      <AppRouter />
      <ToastContainer />
    </ProfileProvider>
  )
}

export default App
