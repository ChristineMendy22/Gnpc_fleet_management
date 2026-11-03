import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'

const PublicOnlyRoute = ({ children }) => {
    const { currentUser } = useAuth()

    // If already logged in, send them straight to the dashboard
    if (currentUser) {
        return <Navigate to="/dashboard" replace />
    }
    
    // If not logged in, let them see the login/register form
    return children
}

export default PublicOnlyRoute