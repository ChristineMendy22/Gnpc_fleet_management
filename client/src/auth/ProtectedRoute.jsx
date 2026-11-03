import { Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useAuth()
    
    // If NOT logged in, kick them out to the login page
    if (!currentUser) {
        return <Navigate to="/login" replace />;
    }
    
    // If logged in, let them see the private page
    return children;
}  

export default ProtectedRoute