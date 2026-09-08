import { LogOut, LogOutIcon, User } from "lucide-react"
import Sidebar from "../components/Sidebar"
import { useState } from "react"

const authUser = {
  name: "John Doe",
}

const UserAvatar = (user) => {
  return (
    <div className="flex items-center gap-2">
        <User className="h-5 w-5" />
        <span className="text-sm font-medium text-gray-700">{user.name}</span>
    </div>
  )
}

const AppLayout = ({title, children}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1 flex flex-col">
            <header className="p-3 bg-white border-b border-gray-200 shadow-md flex items-center justify-between">
                <h1 className="text-xl font-bold mb-4">{title}</h1>
                <button onClick={() => setMenuOpen(true)} className="flex items-center gap-2 border-2 border-gray-300 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                    {UserAvatar(authUser)}
                </button>
                {menuOpen && (
                    <div className="absolute right-3 top-16 bg-white border border-gray-300 rounded-md shadow-lg p-2">
                        <div className="flex flex-col">
                            <button>Logout</button>
                            <button>Settings</button>
                        </div>
                    </div>      
                )}
            </header>
            {/* Main content goes here */}
            <main className="p-4 flex-1">
              {children}
            </main>
        </div>
    </div>
  )
}

export default AppLayout