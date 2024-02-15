/* eslint-disable react/prop-types */
import { EmployeeTable } from "./EmployeeTable";
import { EmployeeCard } from "./EmployeeCard";

export const EmployeesList = ({ employees, onDelete }) => {
  return (
    <div className="flex min-h-screen pb-12">
      <div className="relative overflow-x-auto w-full">
        <div className="sm:hidden flex flex-wrap justify-center gap-4">
          {employees.map((employee) => {
            return <EmployeeCard key={employee.id} employee={employee} onDelete={onDelete} />;
          })}
        </div>
        <table className="hidden sm:table w-full mx-auto text-left font-sans text-dark">
          <thead className="text-[18px] font-normal bg-green dark:bg-dark1 text-white dark:text-green">
            <tr className="border-[6px] border-white dark:border-dark3">
              <th className="p-[10px]">ID</th>
              <th className="p-[10px]">Employee Name</th>
              <th className="p-[10px]">Employee Email</th>
              <th className="p-[10px]">Department</th>
              <th className="p-[10px]">Role</th>
              <th className="p-[10px]">Gender</th>
              <th className="p-[10px]">Actions</th>
            </tr>
          </thead>
          <tbody className="text-[16px] font-normal text-dark dark:text-white ">
            {employees.map((employee) => {
              return <EmployeeTable key={employee.id} employee={employee} onDelete={onDelete} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}