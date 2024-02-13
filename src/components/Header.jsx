import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom";
import { GoSun } from "react-icons/go";

function Header() {
    return (
        <header className="px-28 py-1 flex justify-between shadow-sm items-center">
            <img className="h-12" src={ logo } alt="logo" />
            <nav className="space-x-16 font-sans font-normal text-lg text-dark active:text-green">
                <NavLink exact to="/"className="hover:text-green ">Employee Records</NavLink>
                <NavLink to="/new-hire" className="hover:text-green">New Hire</NavLink>
            </nav>
            <GoSun className="h-8 w-8 fill-green hover:cursor-pointer hover:fill-green"/>
        </header>
    );
}

export default Header;