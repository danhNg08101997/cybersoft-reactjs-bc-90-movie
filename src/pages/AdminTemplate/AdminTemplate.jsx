import React from "react";
import { Outlet } from "react-router-dom";
import NavbarAdmin from "./_components/Navbar/index.jsx";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

function AdminTemplate() {

    const authService = useSelector((state)=>state.authReducer)

    const {data} = authService

    if(!data) return <Navigate to="/auth"/>

  return (
    <div>
      <NavbarAdmin />
      <Outlet />
    </div>
  );
}

export default AdminTemplate;
