/* eslint-disable react/prop-types */
import { IoTrashBin } from "react-icons/io5";
import { MdNoteAlt } from "react-icons/md";

function EmployeeTable({ employee, onDelete }) {
  function handleDelete(){
    fetch(`https://easy-hr-api.vercel.app/employees/${employee.id}`, {
      method: "DELETE",
    })
    onDelete(employee.id);
  }

  return (
    <tr key={employee.id}>
      <td>{employee.id}</td>
      <td>
        <img
          className="inline-block h-6 w-6 rounded-full object-cover mr-1 hover:cursor-pointer"
          src={employee.image}
          alt="Profile pic"
        />{" "}
        {employee.name}
      </td>
      <td>{employee.email}</td>
      <td>{employee.department}</td>
      <td>{employee.role}</td>
      <td>{employee.gender}</td>
      <td>
        <button>
          <MdNoteAlt className="fill-green mr-2" />
        </button>
        <button onClick={handleDelete}>
          <IoTrashBin className="fill-[#FF3C5F]" />
        </button>
      </td>
    </tr>
  );
}

export default EmployeeTable;
