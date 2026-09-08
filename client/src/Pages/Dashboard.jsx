import AppLayout from "../layout/AppLayout"

const Dashboard = () => {
  return (
    <AppLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 shadow rounded border border-gray-200 *:hover:bg-gray-100 transition-colors duration-300">
            <div className="flex justify-between items-start">
                <h3 className="text-md font-medium text-gray-800">Card 1</h3>
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-green-500">
                    <i className="ti ti-car" aria-hidden="true"></i>
                </div>
            </div>
            <p className="text-green-600">This is the content for card 1.</p>
        </div>
        <div className="bg-white p-4 shadow rounded border border-gray-200 *:hover:bg-gray-100 transition-colors duration-300">
          <div className="flex justify-between items-start">
            <h3 className="text-md font-medium text-gray-800">Card 2</h3>
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-green-500">
              <i className="ti ti-car" aria-hidden="true"></i>
            </div>
          </div>
          <p className="text-green-600">This is the content for card 2.</p>
        </div>
        <div className="bg-white p-4 shadow rounded border border-gray-200 *:hover:bg-gray-100 transition-colors duration-300">
          <div className="flex justify-between items-start">
            <h3 className="text-md font-medium text-gray-800">Card 3</h3>
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-green-500">
              <i className="ti ti-car" aria-hidden="true"></i>
            </div>
          </div>
          <p className="text-green-600">This is the content for card 3.</p>
        </div>
        <div className="bg-white p-4 shadow rounded border border-gray-200 *:hover:bg-gray-100 transition-colors duration-300">
          <div className="flex justify-between items-start">
            <h3 className="text-md font-medium text-gray-800">Card 4</h3>
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-green-500">
              <i className="ti ti-car" aria-hidden="true"></i>
            </div>
          </div>
          <p className="text-green-600">This is the content for card 4.</p>
        </div>
      </div>
    </AppLayout>
  )
}

export default Dashboard