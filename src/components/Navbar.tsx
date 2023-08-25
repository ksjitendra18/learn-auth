import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="md:w-[1140px] my-3 mx-auto flex justify-between">
      <h1 className="text-2xl font-bold">
        <Link to="/">Learn Auth</Link>
      </h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
