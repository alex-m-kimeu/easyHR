import { useState, useEffect } from "react";

function EmployeeRecords() {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetch("https://easy-hr-api.vercel.app/employees")
            .then(resp => resp.json())
            .then(employees => setEmployees(employees))
    }, [])

    return (
        <div>
            <h2>Employee Records</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Employee Name</th>
                        <th>Employee Email</th>
                        <th>Department</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.department}</td>
                            <td>{employee.role}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeRecords;