import { Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { useEffect } from "react"

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useAuth()
    
    if (!currentUser) return <Navigate to={"/login"} />
    return children
}  

export default ProtectedRoute