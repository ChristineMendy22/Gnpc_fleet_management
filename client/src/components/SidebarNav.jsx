import { User } from "lucide-react"
import { Link } from "react-router-dom"

const SidebarNav = () => {
  return (
    <div className="bg-white border-b h-16 w-full left-52 absolute z-100">
        <div className="flex items-center space-between">
            {/* Navigation Links */}
            <div className="hidden sm:ml-6 sm:block">
                <div className="relative flex items-center space-x-4">
                
                    
                    <button className="absolute top-1.5 -right-[100] flex items-center gap-2 border-2 border-green-900 bg-green-900 text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                        <User className="h-5 w-5" /> Logout
                    </button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SidebarNav
