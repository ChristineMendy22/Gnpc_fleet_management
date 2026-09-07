import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './Pages/Index'
import LoginPage from './Pages/LoginPage'
import MyRequests from './Pages/MyRequests'
import NewRequests from './Pages/CreateRequest'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/request-vehicle' element={<MyRequests/>}/> 
        <Route path='/create-request' element={<NewRequests/>}/>
      </Routes>
    </Router>
  )
}

export default App
