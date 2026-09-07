import React from 'react'

const RequestApproval = () => {
  return (
    <div className="p-4 bg-gray-100 border-b border-gray-200 my-4">
        <div className="flex items-center gap-2">
            <input
        
                id="search"
                className="w-96 border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Search requests..."
            />
            <input
                type="text"
                className='border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500'

            />
        </div>
        
    </div>
  )
}

export default RequestApproval