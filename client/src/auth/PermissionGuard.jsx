import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const PermissionGuard = ({roles, children}) => {
    const {currentUser} = useAuth()
    
    // console.log(currentUser && !roles.includes(currentUser?.role))
    
    if (currentUser && !roles.includes(currentUser.role)) {
        return <Navigate to={"/dashboard"} replace />
    }
    return children
}

export default PermissionGuard