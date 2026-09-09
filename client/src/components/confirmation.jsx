const Confirmation = ({ action, onConfirm, onCancel }) => {
  return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
    <div className="w-full max-w-sm rounded-lg bg-white p-5 shadow-xl">
      <h2 className="text-lg font-semibold text-gray-800">Confirm action</h2>
      <p className="mt-2 text-sm text-gray-600">
        Are you sure you want to {action} this request?
      </p>
      <div className="mt-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          No
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className={`rounded-md px-4 py-2 text-sm font-medium text-white ${
            action === "approve"
              ? "bg-green-500 hover:bg-green-700"
              : "bg-red-500 hover:bg-red-700"
          }`}
        >
          Yes
        </button>
      </div>
        </div>
    </div>
  )
}

export default Confirmation