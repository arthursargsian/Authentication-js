import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import LogIn from "./pages/LogIn";
import NotFound from "./pages/404/NotFound";
import UserContent from "./pages/UserContent";
import PrivateRouteUser from "./private/PrivateRouteUser";
import OnPrivateRoute from "./private/onPrivateRoute";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<OnPrivateRoute><LogIn/></OnPrivateRoute>}/>
                <Route path="/user" element={<PrivateRouteUser><UserContent/></PrivateRouteUser>}/>
                <Route path="/not-found" element={<NotFound/>}/>
                <Route path="/*" element={<Navigate to="/not-found"/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
