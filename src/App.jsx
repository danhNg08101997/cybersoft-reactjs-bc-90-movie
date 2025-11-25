import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeTemplate from "./pages/HomeTemplate/HomeTemplate.jsx";
import AdminTemplate from "./pages/AdminTemplate/AdminTemplate.jsx";
import Home from "./pages/HomeTemplate/Home/index.jsx";
import About from "./pages/HomeTemplate/About/index.jsx";
import ListMovie from "./pages/HomeTemplate/ListMovie/index.jsx";
import Dashboard from "./pages/AdminTemplate/Dashboard/index.jsx";
import AddUser from "./pages/AdminTemplate/AddUser/index.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<HomeTemplate />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="list-movie" element={<ListMovie />} />
                </Route>
                <Route path="admin" element={<AdminTemplate />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="add-user" element={<AddUser />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
