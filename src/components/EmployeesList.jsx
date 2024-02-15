/* eslint-disable react/prop-types */
import EmployeeTable from "./EmployeeTable";

function EmployeesList({ employees, onDelete }) {
  return (
    <div className="overflow-hidden ">
      <table className="w-full text-left font-sans text-dark">
        <thead className="text-[18px] font-normal bg-green text-white">
          <tr>
            <th className="p-[10px]">ID</th>
            <th className="p-[10px]">Employee Name</th>
            <th className="p-[10px]">Employee Email</th>
            <th className="p-[10px]">Department</th>
            <th className="p-[10px]">Role</th>
            <th className="p-[10px]">Gender</th>
            <th className="p-[10px]">Actions</th>
          </tr>
        </thead>
        <tbody className="text-[16px] font-normal text-dark">
          {employees.map((employee) => {
            return <EmployeeTable key={employee.id} employee={employee} onDelete={onDelete} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeesList;
