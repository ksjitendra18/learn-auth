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
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
