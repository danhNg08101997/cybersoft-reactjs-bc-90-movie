import React from 'react';
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import rederRoutes from "./routes/index.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route>{rederRoutes()}</Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
