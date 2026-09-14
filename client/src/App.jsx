import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './Pages/Index'
import LoginPage from './Pages/LoginPage'
import MyRequests from './Pages/MyRequests'
import NewRequests from './Pages/CreateRequest'
import Approval from './Pages/Approval'
import Dashboard from './Pages/Dashboard'
import Assignment from './Pages/Assignment'
import Trips from './Pages/Trips'
import ProtectedRoute from './auth/ProtectedRoute'
import PermissionGuard from './auth/PermissionGuard'

function App() {
  

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/request-vehicle" element={<ProtectedRoute><MyRequests /></ProtectedRoute>} />
        <Route path="/create-request" element={<ProtectedRoute><NewRequests /></ProtectedRoute>} />
        <Route path="/approval" element={<ProtectedRoute><Approval /></ProtectedRoute>} />
        <Route path="/assignment" element={
          <ProtectedRoute> 
            <PermissionGuard roles={["admin"]}>
              <Assignment />
            </PermissionGuard>
          </ProtectedRoute>} 
        />
        <Route  path="/trips" element={<ProtectedRoute><Trips /></ProtectedRoute>} />
      </Routes>
    </Router>
  )
}

export default App
