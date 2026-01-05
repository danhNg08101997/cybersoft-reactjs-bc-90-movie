import { lazy } from "react";
import { NavLink, Route } from "react-router-dom";

const routes = [
  {
    path: "",
    element: lazy(()=> import("../pages/HomeTemplate/HomeTemplate.jsx")),
    name: "HomeTemplate",
    nested: [
      { path: "", element: lazy(()=> import("../pages/HomeTemplate/Home/index.jsx")), name: "Home" },
      { path: "about", element: lazy(()=> import("../pages/HomeTemplate/About/index.jsx")), name: "About" },
      { path: "list-movie", element: lazy(()=> import("../pages/HomeTemplate/ListMovie/index.jsx")), name: "List Movie" },
      { path: "hooks", element: lazy(()=> import("../pages/HomeTemplate/Hooks/index.jsx")), name: "Hooks" },
      { path: "movie-detail/:id", element: lazy(()=> import("../pages/HomeTemplate/HomeTemplate.jsx")) },
    ],
  },
  {
    path: "admin",
    element: lazy(()=> import("../pages/AdminTemplate/AdminTemplate.jsx")),
    name: "AdminTemplate",
    nested: [
      { path: "dashboard", element: lazy(()=> import("../pages/AdminTemplate/Dashboard/index.jsx")), name: "Dashboard" },
      { path: "add-user", element: lazy(()=> import("../pages/AdminTemplate/AddUser/index.jsx")), name: "AddUser" },
    ],
  },
  { path: "*", element: lazy(()=> import("../pages/PageNotFound/index.jsx")) },
  { path: "auth", element: lazy(()=> import("../pages/AdminTemplate/Auth/index.jsx")) },
];

const rederRoutes = () => {
  return routes?.map((route, index) => {
    if (route.nested) {
      return (
        <Route key={index} path={route.path} element={<route.element />}>
          {route?.nested.map((item, index) => (
            <Route key={index} path={item.path} element={<item.element />} />
          ))}
        </Route>
      );
    } else {
      return (
        <Route key={index} path={route.path} element={<route.element />} />
      );
    }
  });
};

export const renderNavbar = (screen) => {
  return routes?.map((route) => {
    if (screen === route.name) {
      return route.nested?.map((item, index) => {
        return (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 md:text-fg-brand md:dark:bg-transparent"
                  : "block py-2 px-3 text-body rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0  md:dark:hover:bg-transparent"
              }
              aria-current="page"
            >
              {item.name}
            </NavLink>
          </li>
        );
      });
    }
  });
};

export default rederRoutes;
