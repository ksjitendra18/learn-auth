import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="md:w-[1140px] mx-auto">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
