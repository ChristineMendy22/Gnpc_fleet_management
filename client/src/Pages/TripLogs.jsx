import React, { useState } from 'react'
import { ClipboardCheck } from 'lucide-react'
import AppLayout from '../layout/AppLayout'

const TripLogs = () => {
  const [trip, setTrip] = useState({
    driver: '',
    vehicle: '',
    destination: '',
    startMileage: '',
    endMileage: '',
  })

  const updateTrip = (event) => {
    setTrip({ ...trip, [event.target.id]: event.target.value })
  }

  // const distance = trip.startMileage && trip.endMileage
  //   ? `${Math.max(0, Number(trip.endMileage) - Number(trip.startMileage))} KM`
  //   : 'Not provided'

  return (
    <AppLayout title={"Trip Logs"}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <form id="trip-log-form" action="" className="space-y-5 rounded-lg border border-gray-200 bg-white p-6 shadow-md lg:col-span-2">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Trip Log Details</h2>
            <p className="mt-1 text-sm text-gray-500">Record the vehicle and mileage for this trip.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="driver" className="text-sm font-medium text-gray-700">Driver</label>
                <input
                  id="driver"
                  value={trip.driver}
                  onChange={updateTrip}
                  className="w-full bg-white border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter driver name..."
                />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="vehicle" className="text-sm font-medium text-gray-700">Vehicle</label>
              <input
                id="vehicle"
                value={trip.vehicle}
                onChange={updateTrip}
                className="w-full bg-white border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter vehicle name..."
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="destination" className="text-sm font-medium text-gray-700">Destination</label>
              <input
                id="destination"
                value={trip.destination}
                onChange={updateTrip}
                className="w-full bg-white border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter trip destination..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="startMileage" className="text-sm font-medium text-gray-700">Start Mileage (KM)</label>
              <input
                id="startMileage"
                type="number"
                value={trip.startMileage}
                onChange={updateTrip}
                className="w-full bg-white border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter starting mileage..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="endMileage" className="text-sm font-medium text-gray-700">End Mileage (KM)</label>
              <input
                id="endMileage"
                type="number"
                value={trip.endMileage}
                onChange={updateTrip}
                className="w-full bg-white border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter ending mileage..."
              />
            </div>
          </div>

        </form>

        <aside className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-md">
          <div>
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-800">
              <ClipboardCheck className="h-6 w-6" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">Trip Summary</h2>
            <div className="mt-5 divide-y divide-gray-100 border-y border-gray-100">
              <div className="flex justify-between gap-4 py-3 text-sm">
                <span className="text-gray-500">Driver</span>
                <span className="text-right font-medium text-gray-800">{trip.driver || 'Not provided'}</span>
              </div>
              <div className="flex justify-between gap-4 py-3 text-sm">
                <span className="text-gray-500">Vehicle</span>
                <span className="text-right font-medium text-gray-800">{trip.vehicle || 'Not provided'}</span>
              </div>
              <div className="flex justify-between gap-4 py-3 text-sm">
                <span className="text-gray-500">Destination</span>
                <span className="text-right font-medium text-gray-800">{trip.destination || 'Not provided'}</span>
              </div>
              <div className="flex justify-between gap-4 py-3 text-sm">
                <span className="text-gray-500">Start Mileage</span>
                <span className="text-right font-medium text-gray-800">{trip.startMileage || 'Not provided'}</span>
              </div>
              <div className="flex justify-between gap-4 py-3 text-sm">
                <span className="text-gray-500">End Mileage</span>
                <span className="text-right font-medium text-gray-800">{trip.endMileage || 'Not provided'}</span>
              </div>
            </div>
          </div>
          <button
            type="submit"
            form="trip-log-form"
            className="mt-8 w-full rounded-md bg-green-900 px-4 py-3 text-sm font-medium text-white hover:bg-green-700"
          >
            Submit Trip Log
          </button>
        </aside>
      </div>
    </AppLayout>
  )
}

export default TripLogs