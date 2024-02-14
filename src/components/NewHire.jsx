/* eslint-disable react/prop-types */
import { useState } from "react";
import { useHistory } from "react-router-dom";

function NewHire() {
  const history = useHistory();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    role: "",
    gender: "Male",
    image: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((formData) => ({ ...formData, [id]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://easy-hr-api.vercel.app/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((resp) => resp.json());
    setFormData({
      name: "",
      email: "",
      department: "",
      role: "",
      gender: "Male",
      image: "",
    })
    history.push("/");
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-96 h-80.5 shadow-lg m-8 rounded-lg p-4">
        <h2 className="text-center text-dark font-sans font-medium text-lg mb-1">
          Add New Hire
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-6">
            <input
              className="w-full px-3 py-2 bg-white border border-green rounded-md text-sm text-green  placeholder-green outline-none"
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Employees name..."
            />
          </div>
          <div className="mb-6">
            <input
              className="w-full px-3 py-2 bg-white border border-green rounded-md text-sm text-green   placeholder-green outline-none"
              type="text"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Employees email..."
            />
          </div>
          <div className="mb-6">
            <input
              className="w-full px-3 py-2 bg-white border border-green rounded-md text-sm text-green   placeholder-green outline-none"
              type="text"
              id="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Department..."
            />
          </div>
          <div className="mb-6">
            <input
              className="w-full px-3 py-2 bg-white border border-green rounded-md text-sm text-green   placeholder-green outline-none"
              type="text"
              id="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Role..."
            />
          </div>
          <div className="mb-6">
            <select
              className="w-full px-3 py-2 bg-white border border-green rounded-md text-sm text-green   placeholder-green outline-none"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="mb-6">
            <input
              className="w-full px-3 py-2 bg-white border border-green rounded-md text-sm text-green  placeholder-green outline-none"
              type="text"
              id="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Profile Pic URL..."
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="mb-6 bg-green text-white px-5 py-2"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewHire;
