import { NavLink } from "react-router-dom";
// import logo from "../../assets/svg/logo.svg";
// import logo2 from "../../assets/png/logo.png";

//usando tailwindcss

function Navbar() {
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Servitratar G&G</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
