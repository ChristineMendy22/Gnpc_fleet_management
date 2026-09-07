import { LogOut, User } from "lucide-react"
import Sidebar from "../components/Sidebar"


const AppLayout = ({title, children}) => {
  return (
    <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1 flex flex-col">
            <header className="p-4 bg-gray-100 border-b border-gray-200 flex items-center justify-between">
                <h1 className="text-xl font-bold mb-4">{title}</h1>
                <button className="flex items-center gap-2 border-2 border-red-900 bg-red-900 text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">
                  <LogOut className="h-5 w-5" /> Logout
                </button>
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