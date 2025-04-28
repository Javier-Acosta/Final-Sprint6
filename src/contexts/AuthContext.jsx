import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import api, { loginUser } from "../api/clienteApi";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, SetUser] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            const decoded = jwtDecode(token)
            SetUser(decoded)
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`

        }

    }, [])

    const login = async (email, password) => {
        try {
            const res = await loginUser({ email, password })
            const { token } = res.data
            const decoded = jwtDecode(token)
            SetUser(decoded)

            localStorage.setItem("token", token)
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`
            return true
        } catch (err) {
            console.error("Error durin login:", err);

            return false
        }
    }
    const logout = () => {
        SetUser(null)
        localStorage.removeItem("token")
        api.defaults.headers.common["Authorization"]
    }
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth =()=> useContext(AuthContext)