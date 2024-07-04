import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="h-36 flex justify-items-center gap-5 py-8 px-8 bg-orange-400 text-white text-3xl align-text-top">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `duration-300 ${isActive ? "text-purple-700" : "text-gray-500"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Booklist"
            className={({ isActive }) =>
              `duration-300 ${isActive ? "text-purple-700" : "text-gray-500"}`
            }
          >
            booklist
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              `duration-150 ${isActive ? "text-purple-700" : "text-gray-500"}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Notfound"
            className={({ isActive }) =>
              `duration-150 ${isActive ? "text-purple-700" : "text-gray-500"}`
            }
          >
            Notfound
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Github"
            className={({ isActive }) =>
              `duration-150 ${isActive ? "text-purple-700" : "text-gray-500"}`
            }
          >
            Github
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
