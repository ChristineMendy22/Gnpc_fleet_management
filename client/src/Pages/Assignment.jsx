import React from 'react'
import AppLayout from '../layout/AppLayout'
import { AVAILABILITY, VEHICLES, VEHICLE_STATUS_STYLES } from '../data/dummyData'


const Assignment = () => {
  return (
    <AppLayout title="Vehicle Assignment Module">
      <div>
        <h1 className="font-bold mb-3">Vehicle Assignment</h1>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {AVAILABILITY.map((a) => (
                <div key={a.label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-400">{a.label}</span>
                        <span className={`h-2 w-2 rounded-full ${a.color}`} />
                    </div>
                    <div className="mt-2 flex items-end gap-1.5">
                        <span className="text-2xl font-semibold text-slate-800">{a.count}</span>
                        <span className="mb-0.5 text-xs text-slate-400"></span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                        <div className={`h-full ${a.color}`} style={{ width: `${(a.count) * 100}%` }} />
                    </div>

                </div>
            ))}
        </div>
        <table className="min-w-full divide-y divide-gray-200 border border-gray-200 mt-6">
          <thead className="bg-gray-50">
            <tr>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned To</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mileage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Service</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {VEHICLES.map((vehicle) => (
              <tr key={vehicle.id}>
                <td className="px-6 py-4 whitespace-nowrap">{vehicle.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${vehicle.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {vehicle.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{vehicle.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">{vehicle.assignedTo || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap">{vehicle.mileage.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">{vehicle.lastService}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppLayout>
  )
}

export default Assignment