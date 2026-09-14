import { createContext, useContext, useState } from "react"
import { USERS } from "../data/dummyData"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState(null)

    const [currentUser, setCurrentUser] = useState(() => {
        const savedUser = localStorage.getItem("auth_user")
        return savedUser? JSON.parse(savedUser) : null;
    })

    const [error, setError] = useState(null)

    const login = (username, password) => {
        const user = USERS.find(u => u.username === username && u.password === password)
        localStorage.setItem('auth_user', JSON.stringify(user));
        if (user) {
            setCurrentUser(user)
        } else {
            setError('Invalid username or password')
        }
        return user
    }

    const logout = () => {
        setCurrentUser(null)
        localStorage.removeItem("auth_user")
    }

    return (
        <AuthContext.Provider value={{ currentUser, login, logout, error, setError }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
