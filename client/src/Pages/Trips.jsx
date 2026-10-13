import AppLayout from '../layout/AppLayout'
const Trips = () => {
  
  const TripLogs = [
    {}
  ]
  return (
    <AppLayout title={"Trips"}>
      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-5 py-3 text-left text-xs font-medium uppercase text-gray-500">Driver</th>
                <th className="px-5 py-3 text-left text-xs font-medium uppercase text-gray-500">Vehicle</th>
                <th className="px-5 py-3 text-left text-xs font-medium uppercase text-gray-500">Destination</th>
                <th className="px-5 py-3 text-left text-xs font-medium uppercase text-gray-500">Start KM</th>
                <th className="px-5 py-3 text-left text-xs font-medium uppercase text-gray-500">End KM</th>
              
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {TripLogs.map((log) => (
                <tr key={log.id}>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-700">{log.driver}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-700">{log.vehicle}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-700">{log.destination}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-700">{log.startMileage}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-700">{log.endMileage}</td>
                
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </AppLayout>
  )
}

export default Trips