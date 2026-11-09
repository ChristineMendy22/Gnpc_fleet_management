import { useEffect, useState } from "react"

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
            onSubmit(userForm);
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

export default UserForm
