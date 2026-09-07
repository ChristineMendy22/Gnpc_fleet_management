import Sidebar from "../components/Sidebar"
import SidebarNav from "../components/SidebarNav"


const AppLayout = ({title, children}) => {
  return (
    <div className="flex min-h-screen">
        <Sidebar />
        <SidebarNav />

        <div className="flex-1 mt-16 p-6">
            <div className="p-4 bg-gray-100 border-b border-gray-200 sticky top-0 z-50">
                <h1 className="text-xl font-bold mb-4">{title}</h1>
            </div>
            {/* Main content goes here */}
            {children}
        </div>
    </div>
  )
}

export default AppLayout