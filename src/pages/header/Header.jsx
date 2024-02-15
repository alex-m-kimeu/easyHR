import { useState, useEffect } from 'react';
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { GoSun, GoMoon } from "react-icons/go";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const localData = localStorage.getItem('darkMode');
    return localData ? JSON.parse(localData) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <header className="px-28 py-[5px] flex justify-between shadow-sm items-center bg-white dark:bg-dark1">
      <img className="h-10" src={logo} alt="logo" />
      <nav className="space-x-16 font-sans font-normal text-[1.05rem] text-dark dark:text-white active:text-green">
        <NavLink exact to="/" className="hover:text-green" activeClassName="text-green">
          Employee Records
        </NavLink>
        <NavLink exact to="/new-hire" className="hover:text-green" activeClassName="text-green">
          New Hire
        </NavLink>
      </nav>
      {darkMode ? (
        <GoSun className="h-6 w-6 fill-green hover:cursor-pointer hover:fill-green" onClick={() => setDarkMode(false)} />
      ) : (
        <GoMoon className="h-6 w-6 fill-green hover:cursor-pointer hover:fill-green" onClick={() => setDarkMode(true)} />
      )}
    </header>
  );
}