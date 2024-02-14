/* eslint-disable react/prop-types */
import EmployeeTable from "./EmployeeTable";

function EmployeesList({ employees, onDelete }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee Name</th>
            <th>Employee Email</th>
            <th>Department</th>
            <th>Role</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return <EmployeeTable key={employee.id} employee={employee} onDelete={onDelete}/>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeesList;
