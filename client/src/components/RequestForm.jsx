import React from 'react'

const RequestForm = () => {
  return (
    <form action="" className="space-y-4">
        <h2 className='text-green-700'>Vehicle Request Form</h2>
        <div className="grid grid-cols-2 gap-4">
            <div className='flex flex-col gap-2'>
                <label htmlFor="Name" className="text-sm font-medium text-gray-700">Name:</label>
                <input
                    id="name"
                    className="w-full bg-white border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter the Name..."
                />
            </div>
             <div className='flex flex-col gap-2'>
                <label htmlFor="department" className="text-sm font-medium text-gray-700">Department:</label>
                <input
                    id="department"
                    className="w-full bg-white border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter department..."
                />
            </div>
            <div className='flex flex-col col-span-2 gap-2'>
                
                <label htmlFor="purpose" className="text-sm font-medium text-gray-700">Purpose:</label>
                <textarea
                    id="purpose"
                    className="w-full bg-white border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter request purpose..."
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="from" className="text-sm font-medium text-gray-700">From:</label>
                <input
                    id="from"
                    className="w-full bg-white border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter departure location..."
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="to" className="text-sm font-medium text-gray-700">To:</label>
                <input
                    id="to"
                    className="w-full bg-white border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter departure location..."
                />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="date" className="text-sm font-medium text-gray-700">Date:</label>
                <input
                    id="date"
                    type='date'
                    className="w-full bg-white border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter Date..."
                />
            </div>
        </div>
        <button onClick={() => { alert('Request Submitted!') }} className="bg-green-900 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700">Submit to Approval</button>
    </form>
  )
}

export default RequestForm
