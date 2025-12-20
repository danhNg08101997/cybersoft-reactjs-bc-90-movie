import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import HomeTemplate from "../pages/HomeTemplate/HomeTemplate.jsx";
import Home from "../pages/HomeTemplate/Home/index.jsx";
import About from "../pages/HomeTemplate/About/index.jsx";
import ListMovie from "../pages/HomeTemplate/ListMovie/index.jsx";
import AdminTemplate from "../pages/AdminTemplate/AdminTemplate.jsx";
import Dashboard from "../pages/AdminTemplate/Dashboard/index.jsx";
import AddUser from "../pages/AdminTemplate/AddUser/index.jsx";
import PageNotFound from "../pages/PageNotFound/index.jsx";
import Hooks from "../pages/HomeTemplate/Hooks/index.jsx";
import MovieDetail from "../pages/HomeTemplate/Detail/index.jsx";


const routes = [{
    path: "",
    element: HomeTemplate,
    name: "HomeTemplate",
    nested: [
        {path: "", element: Home, name: "Home"},
        {path: "about", element: About, name: "About"},
        {path: "list-movie", element: ListMovie, name: "List Movie"},
        {path: "hooks", element: Hooks, name: "Hooks"},
        {path: "movie-detail/:id", element: MovieDetail},
    ]
},
    {
        path: "admin",
        element: AdminTemplate,
        name: "AdminTemplate",
        nested: [
            {path: "dashboard", element: Dashboard, name: "Dashboard"},
            {path: "add-user", element: AddUser, name: "AddUser"},
        ]
    },
    {path: "*", element: PageNotFound}
]

const rederRoutes = () => {
    return (routes?.map((route, index) => {
        if (route.nested) {
            return (<Route key={index} path={route.path} element={<route.element/>}>
                {route?.nested.map((item, index) => <Route key={index} path={item.path} element={<item.element/>}/>)}
            </Route>)
        } else {
            return <Route key={index} path={route.path} element={<route.element/>}/>;
        }
    }))
}

export const renderNavbar = (screen) => {
    return (routes?.map((route) => {
        if (screen === route.name) {
            return route.nested?.map((item, index) => {
                return (<li key={index}>
                    <NavLink to={item.path}
                             className={({isActive}) => isActive ? "block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 md:text-fg-brand md:dark:bg-transparent" : "block py-2 px-3 text-body rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0  md:dark:hover:bg-transparent"}
                             aria-current="page">
                        {item.name}
                    </NavLink>
                </li>)
            })
        }
    }))
}

export default rederRoutes;