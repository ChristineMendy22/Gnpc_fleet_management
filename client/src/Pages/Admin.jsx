import React, { useState } from 'react'
import AppLayout from '../layout/AppLayout'
import { Car, Plus, Wrench } from 'lucide-react'
import { STATUS_STYLES, VEHICLES } from '../data/dummyData'

const Admin = () => {
    const [activeTab, setActiveTab] = useState('user')
    const [users, setUsers] = useState([
        {Name:"Ma Nyima Gibba", Email:"nyimagibba@gmail.com", Role:"Station Supervisor", Department:"IT", Status:"Active"},
        {Name:"Lucy Gomez", Email:"lucygomez@gmail.com", Role:"Audit Assistent", Department:"Audit", Status:"Active"},
        {Name:"Kaddy Faal", Email:"kaddyfaal@gmail.com", Role:"Audit Head", Department:"Audit", Status:"Active"},
        {Name:"Lamin Badjie", Email:"laminbadjie@gmail.com", Role:"Requester", Department:"Operation", Status:"Active"},
        {Name:"Isatou Mendy", Email:"isatoumendy03@gmail.com", Role:"Dept head", Department:"Acounts", Status:"Active"},
    ])
    const [showUserForm, setShowUserForm] = useState(false)
    const [newUser, setNewUser] = useState({
        Name: '',
        Email: '',
        Role: '',
        Department: '',
        Status: 'Active',
    })
    const [departments, setDepartments] = useState([
        {Department: "IT", Supervisor:"Muhammeh Ceesay"},
        {Department:"Commance", Supervisor:"Lamin Ceesay"},
        {Department:"Audit", Supervisor:"Modou Sanyang"},
        {Department:"Operation", Supervisor:"Louse Gomez"},
        {Department:"HR", Supervisor:"Mr Gaye"},
        {Department:"HSSE", Supervisor:"Lawrence"},
    ])
    const [showDepartmentForm, setShowDepartmentForm] = useState(false)
    const [newDepartment, setNewDepartment] = useState({ Department: '', Supervisor: '' })

    const handleAddDepartment = (event) => {
        event.preventDefault()
        if (!newDepartment.Department.trim() || !newDepartment.Supervisor.trim()) return

        setDepartments([...departments, {
            Department: newDepartment.Department.trim(),
            Supervisor: newDepartment.Supervisor.trim(),
        }])
        setNewDepartment({ Department: '', Supervisor: '' })
        setShowDepartmentForm(false)
    }

    const handleAddUser = (event) => {
        event.preventDefault()
        if (!newUser.Name.trim() || !newUser.Email.trim() || !newUser.Role.trim() || !newUser.Department.trim()) return

        setUsers([...users, {
            Name: newUser.Name.trim(),
            Email: newUser.Email.trim(),
            Role: newUser.Role.trim(),
            Department: newUser.Department.trim(),
            Status: newUser.Status,
        }])
        setNewUser({ Name: '', Email: '', Role: '', Department: '', Status: 'Active' })
        setShowUserForm(false)
    }
  return (
    <AppLayout title={"Admin"}>
        {/* <div className="mt-8 flex gap-20 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-6"> */}
        <div className="mb-6 flex border-b border-gray-200">
            <button
                type="button"
                onClick={() => setActiveTab('user')}
                className={`border-b-2 px-4 py-3 text-sm font-medium ${activeTab === 'user' ? 'border-green-700 text-green-800' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
                User
            </button>
           
            <button
                type="button"
                onClick={() => setActiveTab('vehicle')}
                className={`border-b-2 px-4 py-3 text-sm font-medium ${activeTab === 'vehicle' ? 'border-green-700 text-green-800' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
                Vehicle
            </button>
            
            <button
                type="button"
                onClick={() => setActiveTab('department')}
                className={`border-b-2 px-4 py-3 text-sm font-medium ${activeTab === 'department' ? 'border-green-700 text-green-800' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
                Department
            </button>
        </div>
        {/* User tab */}
        {activeTab === "user" && (
            <div className='overflow-x-auto mt-6'>

                <div className="flex flex-col gap-3 bg-white sm:flex-row sm:items-center sm:justify-between">
                    {/* <input
                        id="search"
                        className="w-full border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:w-96"
                        placeholder="Search Users..."
                    /> */}

                     {/* Search bar */}
                    <div className="flex items-center gap-2">
                        <label htmlFor="search" className="text-sm font-medium text-gray-700">Search:</label>
                        <input
                        id="search"
                        className="w-96 border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Search requests..."
                        />
                    </div>

                    <button
                        type="button"
                        onClick={() => setShowUserForm(!showUserForm)}
                        className="bg-green-900 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700"
                    >
                        <Plus size={16} /> Add Users
                    </button>
                </div>
                {showUserForm && (
                    <form onSubmit={handleAddUser} className="grid grid-cols-1 gap-3 border-y border-gray-200 bg-gray-50 p-4 md:grid-cols-2">
                        <input
                            value={newUser.Name}
                            onChange={(event) => setNewUser({ ...newUser, Name: event.target.value })}
                            placeholder="Full name"
                            className="border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="email"
                            value={newUser.Email}
                            onChange={(event) => setNewUser({ ...newUser, Email: event.target.value })}
                            placeholder="Email address"
                            className="border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            value={newUser.Role}
                            onChange={(event) => setNewUser({ ...newUser, Role: event.target.value })}
                            placeholder="Role"
                            className="border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            value={newUser.Department}
                            onChange={(event) => setNewUser({ ...newUser, Department: event.target.value })}
                            placeholder="Department"
                            className="border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <select
                            value={newUser.Status}
                            onChange={(event) => setNewUser({ ...newUser, Status: event.target.value })}
                            className="border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                        <button type="submit" className="rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-900">
                            Save User
                        </button>
                    </form>
                )}
                <div className="mt-8 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-4">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((request, index) => (

                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.Name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.Email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.Role}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.Department}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${STATUS_STYLES[request.Status] ?? "bg-emerald-100 text-emerald-700"}`}>
                                            {request.Status}
                                        </span>
                                    </td>
                                    <td className="p-2 text-sm text-gray-700">
                                        <button className="text-gray-700 font-bold py-1 px-2 rounded">Edit</button>
                                    
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )}
        {/* Vehicle tab */}
        {activeTab === "vehicle" && (
        <div className='space-y-5'>
          
           <div className='flex '>
                 <button
                    type="button"
                    className="ml-auto flex mb-2 items-center gap-1.5 rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-900"
                >
                    <Plus size={16} /> Add Vehicle
                </button>
           </div>
           
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {VEHICLES.map((v) => (
                    <div key={v.id} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-50 text-slate-400">
                                    <Car size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-800">{v.id}</div>
                                    <div className="text-xs text-slate-400">{v.model}</div>
                                </div>
                            </div>
                            
                        </div>
                
                        <div className="mt-4">
                            <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${STATUS_STYLES[v.status] ?? "bg-slate-100 text-slate-600"}`}>
                            {v.status}
                            </span>
                        </div>
                
                        <div className="mt-4 space-y-2 text-xs text-slate-500">
                            <div className="flex items-center gap-1.5">
                                <Wrench size={12} className="text-slate-400" /> Last service: {v.lastService}
                            </div>
                        </div>
                
                        {v.assignedTo && (
                            <div className="mt-4 flex items-center gap-2 rounded-md bg-slate-50 px-3 py-2 text-xs text-slate-600">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-[10px] font-semibold text-white">
                                    {v.assignedTo.split(" ").map((n) => n[0]).join("")}
                                </div>
                                Currently driven by {v.assignedTo}
                            </div>
                        )}
                
                    </div>
                ))}
        </div>
        </div>
        )}
        {/* Department tab */}
        {activeTab === "department" && (
            <div>
                <div className="flex justify-end bg-white p-4">
                    <button
                        type="button"
                        onClick={() => setShowDepartmentForm(!showDepartmentForm)}
                        className="bg-green-900 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700"
                    >
                        <Plus size={16} /> Add Department
                    </button>
                </div>
            <div className="mt-8 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-4">
                {showDepartmentForm && (
                    <form onSubmit={handleAddDepartment} className="grid grid-cols-1 gap-3 border-y border-gray-200 bg-gray-50 p-4 sm:grid-cols-3">
                        <input
                            value={newDepartment.Department}
                            onChange={(event) => setNewDepartment({ ...newDepartment, Department: event.target.value })}
                            placeholder="Department name"
                            className="border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <select
                            value={newDepartment.Supervisor}
                            onChange={(event) => setNewDepartment({ ...newDepartment, Supervisor: event.target.value })}
                            required
                            className="border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="">Select supervisor</option>
                            {[...new Set(departments.map((department) => department.Supervisor))].map((supervisor) => (
                                <option key={supervisor} value={supervisor}>
                                    {supervisor}
                                </option>
                            ))}
                        </select>
                        <button type="submit" className="rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-900">
                            Save Department
                        </button>
                    </form>
                )}
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supervisor</th>
                            
            
                        </tr>
                    </thead>
                    <tbody>
                        {departments.map((request, index) => (

                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.Department}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.Supervisor}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
        )}
        
    </AppLayout>
    

  )
}

export default Admin