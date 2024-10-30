import { createBrowserRouter, Outlet } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>TODO List</div>
    }, 
    {
        path: "/auth",
        element: <div>Login</div>
    }
])