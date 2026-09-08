import AppLayout from '../layout/AppLayout' 
import RequestApproval from '../components/RequestApproval' 

import React from 'react'

const Approval = () => {
  return (
    <AppLayout title="Request Approval">
        <RequestApproval />
    </AppLayout>
  )
}

export default Approval