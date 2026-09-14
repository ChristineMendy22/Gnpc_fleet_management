import { LogOut, Settings, User } from "lucide-react"
import Sidebar from "../components/Sidebar"
import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

const UserAvatar = ({ currentUser }) => {
  return (
    <div className="flex items-center gap-2">
        <User className="h-5 w-5" />
        <span className="text-sm font-medium text-gray-700">
          {currentUser?.username}
        </span>
    </div>
  )
}

const AppLayout = ({title, children}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()
  const handleLogout = () => {
    // Implement logout logic here
    logout()
    navigate("/login")
  }
  return (
    <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1 flex flex-col">
            <header className="p-3 bg-white border-b border-gray-200 shadow-md flex items-center justify-between">
                <h1 className="text-xl font-bold mb-4">{title}</h1>
                <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center gap-2 border-2 border-gray-300 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  <UserAvatar currentUser={currentUser} />
                </button>
                {menuOpen && (
                    <div className="absolute right-3 top-16 bg-white border border-gray-300 rounded-md shadow-lg p-2">
                        <div className="flex flex-col p-5 gap-4">
                            <button className="cursor-pointer flex items-center gap-2 text-gray-700 hover:text-gray-900 border border-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                              <Settings /> Settings
                            </button>
                            <button onClick={handleLogout} className="cursor-pointer flex items-center gap-2 text-red-500 hover:text-red-700 border border-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                              <LogOut /> Logout
                            </button>
                        </div>
                    </div>      
                )}
            </header>
            {/* Main content goes here */}
            <main className="p-4 flex-1" onClick={() => setMenuOpen(false)}>
              {children}
            </main>
        </div>
    </div>
  )
}

export default AppLayout