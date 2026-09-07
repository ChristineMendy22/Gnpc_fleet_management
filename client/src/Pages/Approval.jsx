import AppLayout from '../layout/AppLayout' 
import RequestApproval from '../components/RequestApproval' 

import React from 'react'

const Approval = () => {
  return (
    <AppLayout title="Request Approval">
      <RequestApproval />
    </AppLayout>
    // <div className="p-4 bg-gray-100 border-b border-gray-200 my-4">
    //     <h2 className='text-green-700'>Request Approval</h2>
    // </div>
  )
}

export default Approval