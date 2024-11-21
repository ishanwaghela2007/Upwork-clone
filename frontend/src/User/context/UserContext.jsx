import { createContext, useContext, useState } from 'react'
import AuthServices from '../../appwrite/auth/auth'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = async (email, password) => {
        try {
            const session = await AuthServices.login({ email, password })
            if (session) {
                const userData = await AuthServices.getCurrentUser()
                setUser(userData)
                return true
            }
            return false
        } catch (error) {
            console.error("Login error:", error)
            return false
        }
    }

    const signup = async (firstname, lastname, email, password, confirmpassword) => {
        try {
            const session = await AuthServices.signup({ firstname, lastname, email, password, confirmpassword })
            if (session) {
                const userData = await AuthServices.getCurrentUser()
                setUser(userData)
                return true
            }
            return false
        } catch (error) {
            console.error("Signup error:", error)
            return false
        }
    }

    const logout = async () => {
        try {
            await AuthServices.logout()
            setUser(null)
            return true
        } catch (error) {
            console.error("Logout error:", error)
            return false
        }
    }

    const verification = async () => {
        try {
            const response = await AuthServices.verification()
            return response
        } catch (error) {
            console.error("Verification error:", error)
            return false
        }
    }

    const value = {
        user,
        login,
        signup,
        logout,
        verification
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext)
}