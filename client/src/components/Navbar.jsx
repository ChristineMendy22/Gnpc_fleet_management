import { Link } from 'react-router-dom'
import Logo from '../assets/Images/logo.jpg'
import { House, User } from 'lucide-react'

const Navbar = () => {
  return (
    <nav class="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                {/* Logo */}
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <img src={Logo} alt="Logo" class="h-8 w-auto" />
                </div>

                {/* Navigation Links */}
                <div class="hidden sm:ml-6 sm:block">
                    <div class="flex space-x-4">
                        <Link to="/" class="flex items-center gap-2 text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md border-2 border-green-900 text-sm font-medium">
                           <House className="h-5 w-5" /> Home
                        </Link>
                        <Link to="/login" class="flex items-center gap-2 border-2 border-green-900 bg-green-900 text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                            <User className="h-5 w-5" /> Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
