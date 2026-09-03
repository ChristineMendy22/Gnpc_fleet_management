import { useState, useMemo } from "react";
import {
  LayoutDashboard,
  FilePlus2,
  ClipboardList,
  CheckSquare,
  Users2,
  NotebookText,
  Car,
  IdCard,
  BarChart3,
  Settings,
  Plus,
} from "lucide-react";
import AppLayout from "../layout/AppLayout";

// Data





const STATUSES = [
  "All",
  "Completed",
  "Approved",
  "Assigned",
  "Pending",
  "Rejected",
  "Draft",
];

const STATUS_STYLES = {
  Completed: "bg-emerald-100 text-emerald-700",
  Approved: "bg-sky-100 text-sky-700",
  Assigned: "bg-blue-100 text-blue-800",
  Pending: "bg-amber-100 text-amber-700",
  Rejected: "bg-rose-100 text-rose-700",
  Draft: "bg-slate-200 text-slate-600",
};

const REQUESTS = [
  { date: "02 Jun", From: "Head office", To: "Brikama", purpose: "Cartridge delivery", status: "Completed" },
  { date: "06 Jun", From: "Head office", To: "Banjul Station", purpose: "Printer and cartridge delivery", status: "Completed" },
  { date: "12 Jun", From: "Home", To: "Basse", purpose: "Trip to delivery a cartridge", status: "Approved" },
  { date: "20 Jun", From: "Head office", To: "Senegambia", purpose: "Conference", status: "Rejected" },
  { date: "22 Jun", From: "Home", To: "Sanyang", purpose: "Equipment Delivery", status: "Draft" },
];


const MyRequests = () => {
  return (
    <div>
      <AppLayout title="My Requests">
        <div className="overflow-x-auto mt-6">
          <div className="flex items-center justify-between mb-4">
            {/* Filters */}
            <div className="flex items-center gap-4 mb-4">
              {/* Search bar */}
              <div className="flex items-center gap-2">
                <label htmlFor="search" className="text-sm font-medium text-gray-700">Search:</label>
                <input
                  id="search"
                  className="w-96 border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Search requests..."
                />
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="status" className="text-sm font-medium text-gray-700">  Status:</label>
                <select
                  id="status"
                  className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  {STATUSES.map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <button className="bg-green-900 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700">
              <Plus /> Add Request
            </button>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {REQUESTS.map((request, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.From}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.To}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.purpose}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${STATUS_STYLES[request.status]}`}>
                      {request.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AppLayout>
    </div>
  )
}

export default MyRequests


