import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "./_components/Navbar/index.jsx";

function AdminTemplate() {
    return (
        <div>
            <Navbar />
            <Outlet/>
        </div>
    );
}

export default AdminTemplate;