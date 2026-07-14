import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './Pages/Index'
import LoginPage from './Pages/LoginPage'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App
