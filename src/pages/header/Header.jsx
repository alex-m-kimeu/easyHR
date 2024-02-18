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
    <header className="px-4 sm:px-28 py-[5px] flex flex-col sm:flex-row justify-between gap-5 shadow-sm items-center bg-white dark:bg-dark1">
      <div className="flex justify-between items-center gap-64 sm:gap-0">
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
      <nav
        className={`flex flex-col space-y-4 sm:space-x-16 sm:space-y-0 sm:flex-row font-sans font-normal text-[1.05rem] text-dark dark:text-white active:text-green ${isOpen ? "block" : "hidden"
          } sm:block`}
      >
        <NavLink
          data-testid="employee-link"
          to="/employee"
          className="hover:text-green"
          activeClassName="text-green"
        >
          Employees
        </NavLink>
        <NavLink
          data-testid="hire-link"
          to="/hire"
          className="hover:text-green"
          activeClassName="text-green"
        >
          Hire
        </NavLink>
      </nav>
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
      <button
        onClick={handleLogout}
        className="bg-green text-white px-4 py-1 rounded-md hover:bg-darkgreen">
        Logout
      </button>
    </header>
  );
};