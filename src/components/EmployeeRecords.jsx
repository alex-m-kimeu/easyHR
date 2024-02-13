import { useState, useEffect } from "react";
import { IoTrashBin } from "react-icons/io5";
import { MdNoteAlt } from "react-icons/md";

function EmployeeRecords() {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetch("https://easy-hr-api.vercel.app/employees")
            .then(resp => resp.json())
            .then(employees => setEmployees(employees))
    }, [])

    return (
        <div>
            <h2 className="text-green font-sans font-extrabold text-2xl text-center py-5">Employee Records</h2>
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
                                <button><MdNoteAlt className="fill-green"/></button>
                                <button><IoTrashBin className="fill-[#FF3C5F]"/></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeRecords;