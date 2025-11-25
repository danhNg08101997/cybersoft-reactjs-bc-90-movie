import React from 'react';
import {Outlet} from 'react-router-dom'
import NavbarHome from "./_components/navbar/index.jsx";

function HomeTemplate() {
    return (
        <div>
            <NavbarHome />
            <Outlet />
        </div>
    );
}

export default HomeTemplate;