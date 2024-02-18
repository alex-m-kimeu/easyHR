import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { GoSun, GoMoon } from "react-icons/go";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router";


export const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const localData = localStorage.getItem("darkMode");
    return localData ? JSON.parse(localData) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <header className="px-2 sm:px-28 py-[5px] flex flex-col sm:flex-row justify-between shadow-sm items-center text-center bg-white dark:bg-dark1">
      <div className="flex justify-between items-center w-full sm:w-auto">
        <img className="h-10" src={logo} alt="logo" />
        <div className="sm:hidden">
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="h-6 w-6 fill-green hover:cursor-pointer hover:fill-green" />
            ) : (
              <FaBars className="h-6 w-6 fill-green hover:cursor-pointer hover:fill-green" />
            )}
          </button>
        </div>
      </div>
      <div className={`flex flex-col sm:flex-row justify-between items-center w-full sm:w-auto mt-4 sm:mt-0 ${isOpen ? "block" : "hidden"
        } sm:block`}>
        <nav
          className="flex flex-col items-center sm:flex-row space-y-4 sm:space-x-16 sm:space-y-0 font-sans font-normal text-[1.05rem] text-dark dark:text-white active:text-green"
        >
          <NavLink
            data-testid="employee-link"
            to="/employee"
            className="hover:text-green"
          >
            Employees
          </NavLink>
          <NavLink
            data-testid="hire-link"
            to="/hire"
            className="hover:text-green"
          >
            Hire
          </NavLink>
          <button
            onClick={handleLogout}
            className="bg-green text-white px-4 py-1 rounded-md hover:bg-darkgreen">
            Logout
          </button>
          <div className="mt-4 sm:mt-0 sm:ml-4 flex justify-center sm:justify-normal items-center">
            {darkMode ? (
              <GoSun
                className="h-6 w-6 fill-green hover:cursor-pointer hover:fill-green"
                onClick={() => setDarkMode(false)}
              />
            ) : (
              <GoMoon
                className="h-6 w-6 fill-green hover:cursor-pointer hover:fill-green"
                onClick={() => setDarkMode(true)}
              />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};