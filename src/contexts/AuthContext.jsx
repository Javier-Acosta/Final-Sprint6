import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import api, { loginUser } from "../api/clienteApi";
import { roleMap } from "../utils/roleMap";

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
            const { token, user: rawUser } = res.data
            const decoded = jwtDecode(token)
            const roleData = roleMap[decoded.role] || { name: 'unknown', Permissions: [] }

            const enrichedUser = {
                ...rawUser,
                role: roleData.name,
                permissions: roleData.permissions
            }

            SetUser(enrichedUser)

            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(enrichedUser))
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`

            return { token, user: enrichedUser }
        } catch (err) {
            console.error("Error durin login:", err);

            return null
        }
    }
    const logout = () => {
        SetUser(null)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        api.defaults.headers.common["Authorization"]
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)