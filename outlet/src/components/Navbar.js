import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
function Navbar() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Navbar;
