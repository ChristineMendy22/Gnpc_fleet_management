import { Car, CarIcon } from "lucide-react"
import AppLayout from "../layout/AppLayout"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const Dashboard = () => {
  const fleetUtilizationData = [
    { name: 'Mon', value: 60 },
    { name: 'Tue', value: 50 },
    { name: 'Wed', value: 70 },
    { name: 'Thu', value: 65 },
    { name: 'Fri', value: 80 },
    { name: 'Sat', value: 40 },
    { name: 'Sun', value: 30 },
  ]

  const fleetStatusData = [
    { name: 'Available', value: 60 },
    { name: 'In Use', value: 30 },
    { name: 'Maintenance', value: 10 },
    { name: 'Out of Service', value: 20 },
  ]
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
      <AppLayout title="Dashboard">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-4 bg-white p-6 shadow rounded-lg border border-gray-200">
                <div className="flex justify-between items-start">
                    <h3 className="text-md font-medium text-gray-800">Total Vehicles</h3>
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-green-500">
                        {/* <i className="ti ti-car" aria-hidden="true"></i> */}
                        <Car className="h-4 w-4 text-white" />
                    </div>
                </div>
                <p className="text-green-600 text-sm">This is the content for card 1.</p>
            </div>
            <div className="space-y-4 bg-white p-6 shadow rounded-lg border border-gray-200 ">
              <div className="flex justify-between items-start">
                <h3 className="text-md font-medium text-gray-800">Available Vehicles</h3>
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-green-500">
                  <Car className="h-4 w-4 text-white" />
                </div>
              </div>
              <p className="text-green-600 text-sm">This is the content for card 2.</p>
            </div>
            <div className="space-y-4 bg-white p-6 shadow rounded-lg border border-gray-200">
              <div className="flex justify-between items-start">
                <h3 className="text-md font-medium text-gray-800">Active Trips</h3>
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-green-500">
                  <Car className="h-4 w-4 text-white" />
                </div>
              </div>
              <p className="text-green-600 text-sm">This is the content for card 3.</p>
            </div>
            <div className="space-y-4 bg-white p-6 shadow rounded-lg border border-gray-200">
              <div className="flex justify-between items-start">
                <h3 className="text-md font-medium text-gray-800">Pending Approvals</h3>
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-green-500">
                  <Car className="h-4 w-4 text-white" />
                </div>
              </div>
              <p className="text-green-600 text-sm">This is the content for card 4.</p>
            </div>
          </div>
      

          {/* Fleet Utilization and Status */}
          <div className="grid grid-cols-3 gap-2 mt-3.5">
  
            {/* Fleet Utilization Bar Charts */}
            <div className="col-span-2 bg-white rounded-lg border p-4 border-gray-200 shadow">

              {/* / ResponsiveContainer makes the chart scale with its parent element */}
              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <BarChart data={fleetUtilizationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="col-span-1 bg-white rounded-lg border p-4 border-gray-200 shadow">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-sm font-semibold text-gray-800">Fleet Status</div>
                  <div className="text-xs text-gray-400">Current status of each vehicle</div>
                </div>
              </div>
              
              {/* Fleet Status Pie Chart showing percentage of available vehicles, inuse vehicles and maintenance vehicles */}
              
              <div style={{ width: "100%", height: 300, backgroundColor: "#fff", padding: "10px", borderRadius: "8px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Tooltip />
                    <Legend />
                    <Pie data={fleetStatusData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      fill="#8884d8"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {fleetStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
    </AppLayout>
  )
}

export default Dashboard