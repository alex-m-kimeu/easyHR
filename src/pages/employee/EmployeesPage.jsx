import { useState, useEffect } from "react";
import { EmployeesList } from "./EmployeesList";
import { Search } from "./Search";

export const  EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://easy-hr-api.vercel.app/employees")
      .then((resp) => resp.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.log(err));
  }, []);

  // Search filter
  const filteredEmployees = employees.filter((employee) => {
    return employee.name.toLowerCase().includes(search.toLowerCase());
  });

  // Delete employee
  function handleDelete(id){
    const newEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(newEmployees);
  }

  return (
    <div className="px-28 dark:bg-dark3">
      <h2 className="text-green font-sans font-extrabold text-2xl text-center py-5">
        Employee Records
      </h2>
      <Search search={search} setSearch={setSearch}/>
      <EmployeesList employees={filteredEmployees } onDelete={handleDelete} />
    </div>
  );
}