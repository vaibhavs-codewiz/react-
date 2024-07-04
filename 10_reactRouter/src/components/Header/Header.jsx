import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul className="flex justify-items-center gap-5 py-8 px-8 bg-orange-400 text-white text-3xl align-text-top">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
}
