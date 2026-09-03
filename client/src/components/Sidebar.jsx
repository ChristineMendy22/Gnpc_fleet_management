import { BarChart3, Car, CheckSquare, ClipboardList, FilePlus2, IdCard, LayoutDashboard, NotebookText, Settings, Users2 } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/GNPClogo.webp";
const Sidebar = () => {
    const NAV_ITEMS = [
        { label: "Dashboard", icon: LayoutDashboard },
        { label: "New Request", icon: FilePlus2 },
        { label: "My Requests", icon: ClipboardList, active: true },
        { label: "Approvals", icon: CheckSquare },
        { label: "Assignments", icon: Users2 },
        { label: "Trip Logs", icon: NotebookText },
        { label: "Vehicles", icon: Car },
        { label: "Drivers", icon: IdCard },
        { label: "Reports", icon: BarChart3 },
        { label: "Admin", icon: Settings },
    ];
  return (
    <div className="w-52 bg-green-900 text-white shadow-lg">
        <div className="space-y-4 p-4">
            <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
                <span className="text-lg font-bold">GNPC Fleet</span>
            </div>
            <ul className="space-y-4">
                {NAV_ITEMS.map((item, index) => (
                    <li key={index} className="mb-6">
                        <Link to={item.path || ""} className="flex items-center gap-2 text-white hover:text-gray-300">
                            <item.icon className="h-5 w-5" />
                            <span className="text-sm font-medium">{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Sidebar