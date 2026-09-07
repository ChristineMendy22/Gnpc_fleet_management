import AppLayout from "../layout/AppLayout";
import RequestForm from '../components/RequestForm';

const NewRequests = () => {
  return (
    <AppLayout title="New Requests">
      <div className="p-4 bg-gray-100 border-b border-gray-200 my-4">
        <RequestForm />
      </div>
    </AppLayout>
  )
}

export default NewRequests