import { useState } from 'react'
import AppLayout from '../layout/AppLayout'
import { AVAILABILITY, DRIVERS, VEHICLES, VEHICLE_STATUS_STYLES } from '../data/dummyData'
import { toast, ToastContainer } from 'react-toastify';

const FLEET_TOTAL = AVAILABILITY.reduce((sum, s) => sum + s.count, 0);
const TRIPS = [
    { id: 'TRIP-001', destination: 'Basse Station' },
    { id: 'TRIP-002', destination: 'Farafenni Station' },
    { id: 'TRIP-003', destination: 'Sanyang Station' },
]

const Assignment = () => {
  const [activeTab, setActiveTab] = useState('assign')
    const [tripSelections, setTripSelections] = useState({})
    const [assignedTrips, setAssignedTrips] = useState({})

    const updateSelection = (tripId, field, value) => {
        setTripSelections((currentSelections) => ({
            ...currentSelections,
            [tripId]: {
                ...currentSelections[tripId],
                [field]: value,
            },
        }))
    }

    const handleAssign = (tripId) => {
        const selection = tripSelections[tripId] || {}
        const conflictingTrip = Object.entries(assignedTrips).find(([assignedTripId, assignment]) => (
            assignedTripId !== tripId && (
                assignment.vehicleId === selection.vehicleId || assignment.driverName === selection.driverName
            )
        ))

        if (!selection.vehicleId || !selection.driverName) {
            toast.error('Select both a vehicle and a driver first.')
            return
        }

        if (conflictingTrip) {
            toast.error('A driver or vehicle can only be assigned to one trip at a time.')
            return
        }

        setAssignedTrips((currentAssignments) => ({
            ...currentAssignments,
            [tripId]: selection,
        }))
        toast.success('Trip assigned successfully!')
    }

    const isAssignedElsewhere = (tripId, field, value) => Object.entries(assignedTrips).some(([assignedTripId, assignment]) => (
        assignedTripId !== tripId && assignment[field] === value
    ))

  return (
    <AppLayout title="Vehicle Assignment Module">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {AVAILABILITY.map((a) => (
                <div key={a.label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-400">{a.label}</span>
                        <span className={`h-2 w-2 rounded-full ${a.color}`} />
                    </div>
                    <div className="mt-2 flex items-end gap-1.5">
                        <span className="text-2xl font-semibold text-slate-800">{a.count}</span>
                        <span className="mb-0.5 text-xs text-slate-400">/ {FLEET_TOTAL}</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                        <div className={`h-full ${a.color}`} style={{ width: `${(a.count / FLEET_TOTAL) * 100}%` }} />
                    </div>

                </div>
            ))}
        </div>
        <h1 className="font-bold mb-3">Vehicle Assignment</h1>
        <div className="mb-6 flex border-b border-gray-200">
            <button
                type="button"
                onClick={() => setActiveTab('assign')}
                className={`border-b-2 px-4 py-3 text-sm font-medium ${activeTab === 'assign' ? 'border-green-700 text-green-800' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
                Assign to Trips
            </button>
            <button
                type="button"
                onClick={() => setActiveTab('status')}
                className={`border-b-2 px-4 py-3 text-sm font-medium ${activeTab === 'status' ? 'border-green-700 text-green-800' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
                Vehicle Status
            </button>
        </div>

        {activeTab === 'assign' && (
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Trip</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Vehicle</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Driver</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {TRIPS.map((trip) => {
                                const selection = tripSelections[trip.id] || {}

                                return (
                                <tr key={trip.id}>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="text-sm font-medium text-gray-700">{trip.id}</div>
                                        <div className="text-xs text-gray-500">{trip.destination}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <select
                                            value={selection.vehicleId || ''}
                                            onChange={(event) => updateSelection(trip.id, 'vehicleId', event.target.value)}
                                            className="w-full rounded-md border border-gray-300 p-2 text-sm text-gray-700 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        >
                                            <option value="">Select vehicle</option>
                                            {VEHICLES.map((vehicle) => (
                                                <option
                                                    key={vehicle.id}
                                                    value={vehicle.id}
                                                    disabled={isAssignedElsewhere(trip.id, 'vehicleId', vehicle.id)}
                                                >
                                                    {vehicle.id} - {vehicle.model}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td className="px-6 py-4">
                                        <select
                                            value={selection.driverName || ''}
                                            onChange={(event) => updateSelection(trip.id, 'driverName', event.target.value)}
                                            className="w-full rounded-md border border-gray-300 p-2 text-sm text-gray-700 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        >
                                            <option value="">Select driver</option>
                                            {DRIVERS.map((driver) => (
                                                <option
                                                    key={driver.name}
                                                    value={driver.name}
                                                    disabled={isAssignedElsewhere(trip.id, 'driverName', driver.name)}
                                                >
                                                    {driver.name}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button type="button" className="rounded-md bg-green-800 px-3 py-2 text-sm font-medium text-white hover:bg-green-700" onClick={() => handleAssign(trip.id)}>
                                            Assign
                                        </button>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )}
        {activeTab === 'status' && <>
        <div className="mb-4 mt-8 overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">

            <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
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
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-700">{vehicle.id}</div>
                                <div className="text-xs text-gray-500">{vehicle.model}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${VEHICLE_STATUS_STYLES[vehicle.status]}`}>
                                {vehicle.status}
                            </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vehicle.location}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vehicle.assignedTo}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vehicle.mileage}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vehicle.lastService}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>}
        
        <ToastContainer />
    </AppLayout>
  )
}

export default Assignment