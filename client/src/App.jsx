import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './Pages/Index'
import LoginPage from './Pages/LoginPage'
import MyRequests from './Pages/MyRequests'
import NewRequests from './Pages/CreateRequest'
import Approval from './Pages/Approval'
import Dashboard from './Pages/Dashboard'
import Assignment from './Pages/Assignment'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/request-vehicle' element={<MyRequests/>}/> 
        <Route path='/create-request' element={<NewRequests/>}/>
        <Route path='/approval' element={<Approval/>}/>
        <Route path='/assignment' element={<Assignment/>}/>
        <Route  path='/trips' element={<Trips/>}/>
      </Routes>
    </Router>
  )
}

export default App
