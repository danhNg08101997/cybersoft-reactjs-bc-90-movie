import React from "react";
import { Outlet } from "react-router-dom";
import NavbarAdmin from "./_components/Navbar/index.jsx";

function AdminTemplate() {
  return (
    <div>
      <NavbarAdmin />
      <Outlet />
    </div>
  );
}

export default AdminTemplate;
