import React, { useEffect, useRef, useState } from 'react'
import AppLayout from '../layout/AppLayout'
import { Car, Plus, Wrench } from 'lucide-react'
import {VEHICLES } from '../data/dummyData'
import api from '../api/api'

const Admin = () => {
    const [activeTab, setActiveTab] = useState('user')
    const [users, setUsers] = useState([])
    const [message, setMessage] = useState('')
    const [selectedUser, setSelectedUser]  = useState(null)
    const [mode, setMode] = useState('add') // 'add' or 'edit'

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const response = await api.get('auth/users/');
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []); 

    const [showUserForm, setShowUserForm] = useState(false)

    const [roleOptions, setRoleOptions] = useState([
        "admin",
        "supervisor",
        "driver",
    ])

    const [departmentOptions, setDepartmentOptions] = useState([
        "operations",
        "iT",
        "hr",
        "accounting",
        "audit",
    ])

    
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

    const handleAddUser = () => {
        setSelectedUser(null)
        setMode('add')
        setShowUserForm(true)
    }

    const handleEditUser = (user) => {
        setSelectedUser(user)
        setMode('edit')
        setShowUserForm(true)
        console.log('selected', selectedUser);
    }

    setTimeout(() => {
        setMessage('');
    }, 5000);

    // console.log(users);
    
    const STATUS_STYLES = {
        true: "bg-emerald-100 text-emerald-700",
        false: "bg-red-100 text-red-700",
    };


    const UserStatus = ({ status }) => {
        return (
            <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                STATUS_STYLES[status] ?? 'bg-emerald-100 text-emerald-700'
            }`}
            >
            {status ? 'Active' : 'Inactive'}
            </span>
        );
    };
    
    const handleSubmit = async ({userForm}) => {
        
        if (mode === 'add') {
            try {
                const response = await api.post('auth/users/', userForm);
                console.log("");
                setUsers([...users, response.data]);
                setMessage('User added successfully!');
                setShowUserForm(false);
            } catch (error) {
                console.error("Error adding user:", error);
            }
        } else if (mode === 'edit') {
            console.log('Editing user:', selectedUser); 
            try {
                const response = await api.put(`auth/users/${selectedUser.id}/`, userForm);
                const updatedUser = response.data;
                setUsers(users.map((user) => (user.id === selectedUser.id ? updatedUser : user)));
                setMessage('User updated successfully!');
                setShowUserForm(false);
            } catch (error) {
                console.error("Error updating user:", error);
            }
        }else {
            console.log('Invalid mode:', mode);
        }
    }

    const UserForm = ({onSubmit, selectedUser, mode}) => {
        const [userForm, setUserForm] = useState({
            first_name: "",
            last_name: "",
            email: "",
            role: "",
            department: "",
            is_active: true,
            password: ""
        })

        useEffect(()=> {
            setUserForm({
                first_name: selectedUser?.first_name || "",
                last_name: selectedUser?.last_name || "",
                email: selectedUser?.email || "",
                role: selectedUser?.role || "",
                department: selectedUser?.department || "",
                is_active: selectedUser?.is_active || true,
            })
        }, [])

        const handleSubmitForm = (e) => {
            e.preventDefault();
            onSubmit(e, userForm);
        }

        return (
            <form onSubmit={handleSubmitForm} className="grid grid-cols-1 gap-3 border-y border-gray-200 bg-gray-50 p-4 md:grid-cols-2">
                <input
                    value={userForm.first_name}
                    onChange={(e) => setUserForm({ ...userForm, first_name: e.target.value })}
                    name="first_name"
                    placeholder="First name"
                    className="border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                    value={userForm.last_name}
                    onChange={(e) => setUserForm({ ...userForm, last_name: e.target.value })}
                    name="last_name"
                    placeholder="Last name"
                    className="border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                    value={userForm.email}
                    onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                    name="email"
                    placeholder="Email address"
                    className="border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {mode === 'add' && (
                    <input
                        value={userForm.password || ''}
                        type='password'
                        onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
                        name="password"
                        placeholder="Password"
                        className="border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                )}
                <select value={userForm.role || ''} onChange={(e) => setUserForm({ ...userForm, role: e.target.value })} name="role" className="border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="">Select role</option>
                    {roleOptions.map((role) => (
                        <option key={role} value={role}>
                            {role.charAt(0).toUpperCase() + role.slice(1)}
                        </option>
                    ))}
                </select>

                <select value={userForm.department || ''} onChange={(e) => setUserForm({ ...userForm, department: e.target.value })} name="department" className="border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="">Select department</option>
                    {departmentOptions.map((department) => (
                        <option key={department} value={department}>
                            {department.charAt(0).toUpperCase() + department.slice(1)}
                        </option>
                    ))}
                </select>

                <select
                    value={userForm.is_active || ''}
                    onChange={(e) => setUserForm({ ...userForm, is_active: e.target.value })}
                    name="is_active"
                    className="border border-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                </select>

                <button type="submit" className="rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-900">
                    {mode === 'add' ? 'Add User' : 'Update User'}
                </button>
            </form>
        )
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
                        onClick={handleAddUser}
                        className="bg-green-900 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700"
                    >
                        <Plus size={16} /> Add Users
                    </button>
                </div>
                
                {showUserForm && (
                    <UserForm mode={selectedUser ? 'edit' : 'add'} selectedUser={selectedUser} onSubmit={handleSubmit}  />
                )}
                
                {message && (
                    <div className={`mt-4 p-2 rounded-md text-sm ${message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {message}
                    </div>
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
                            {loading ? (
                                <tr>
                                    <td colSpan="6" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                                        Loading users...
                                    </td>
                                </tr>
                            ) : users.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                                        No users found.
                                    </td>
                                </tr>
                            ) : (
                                users.map((user) => (
                                
                                
                                <tr key={user.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.first_name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.department}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <UserStatus status={user.is_active} />
                                    </td>
                                    <td className="p-2 text-sm text-gray-700">
                                        <button onClick={() => handleEditUser(user)} className="text-gray-700 font-bold py-1 px-2 rounded">Edit</button>
                                    </td>
                                </tr>
                                ))
                            )}
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