import Sidebar from "../components/Sidebar"


const AppLayout = ({title, children}) => {
  return (
    <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1">
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