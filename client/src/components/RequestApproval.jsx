import { Check, X } from "lucide-react"
import { STATUS_STYLES } from "../data/dummyData"


const RequestApproval = () => {
    const REQUESTAPPROVALS = [
        {requestId: "REQ-001", staffName: "John Doe", department: "IT", vehicleType: "Sedan", purpose: "Meeting", status: "Pending"},
        {requestId: "REQ-002", staffName: "Jane Smith", department: "HR", vehicleType: "SUV", purpose: "Training", status: "Approved"},
        {requestId: "REQ-003", staffName: "Bob Johnson", department: "Finance", vehicleType: "Truck", purpose: "Delivery", status: "Pending"},
        {requestId: "REQ-004", staffName: "Alice Brown", department: "Operations", vehicleType: "Van", purpose: "Site Visit", status: "Pending"},
        {requestId: "REQ-005", staffName: "Charlie Davis", department: "IT", vehicleType: "Sedan", purpose: "Client Meeting", status: "Pending"}
    ]
  return (
    <div className="bg-white my-6">
        <div className="flex items-center gap-4">
            {/* <input
                type="text"
                id="search"
                className="w-66 border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Search requests..."
            /> */}

            {/* Search bar */}
              <div className="flex items-center gap-2">
                <label htmlFor="search" className="text-sm font-medium text-gray-700">Search:</label>
                <input
                  id="search"
                  className="w-96 border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Search requests..."
                />
              </div>
            <select className="w-66 border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
                <option value="">All Departments</option>
                <option value="IT" onClick>IT</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Operations">Operations</option>
                <option value="Commance">Commance</option>
            </select>
            <select className="w-66 border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
                <option value="">All Vehicles</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Truck">Truck</option>
                <option value="Van">Van</option>
                <option value="Toyota">Toyota</option>
            </select>
        </div>
        <div className="mt-8 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-4">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Staff Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle Type</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
             <tbody className="bg-white divide-y divide-gray-200">
                {/* Table rows would go here */}
                {REQUESTAPPROVALS.map((request, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.requestId}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.staffName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.department}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.vehicleType}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.purpose}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${STATUS_STYLES[request.status]}`}>
                                {request.status}
                            </span>
                        </td>
                        <td className="p-2 text-sm text-gray-700">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Approve</button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2">Reject</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default RequestApproval