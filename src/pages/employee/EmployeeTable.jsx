/* eslint-disable react/prop-types */
import { IoTrashBin } from "react-icons/io5";
// import { MdNoteAlt } from "react-icons/md";

export const EmployeeTable = ({ employee, onDelete }) => {
  // Delete employee
  function handleDelete() {
    fetch(`https://easy-hr-api.vercel.app/employees/${employee.id}`, {
      method: "DELETE",
    })
    onDelete(employee.id);
  }

  return (
    <tr key={employee.id} className="bg-white dark:bg-dark border-[6px] border-white dark:border-dark3">
      <td className="p-[10px]">{employee.id}</td>
      <td className="p-[10px]">
        <img
          className="inline-block h-6 w-6 rounded-full object-cover mr-1"
          src={employee.image}
          alt="Profile pic"
        />
        {employee.name}
      </td>
      <td className="p-[10px]">{employee.email}</td>
      <td className="p-[10px]">{employee.department}</td>
      <td className="p-[10px]">{employee.role}</td>
      <td className="p-[10px]">{employee.gender}</td>
      <td className="p-[10px]">
        {/* <button>
          <MdNoteAlt className="fill-green mr-2" />
        </button> */}
        <button onClick={handleDelete}>
          <IoTrashBin className="fill-[#FF3C5F] flex items-center ml-6" />
        </button>
      </td>
    </tr>
  );
}