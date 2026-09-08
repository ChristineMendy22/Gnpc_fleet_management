import AppLayout from "../layout/AppLayout";
import RequestForm from '../components/RequestForm';

const NewRequests = () => {
  return (
    <AppLayout title="New Requests">
      <div className="p-4 bg-white border rounded-lg border-gray-200 my-4 shadow-md">
        <RequestForm />
      </div>
    </AppLayout>
  )
}

export default NewRequests