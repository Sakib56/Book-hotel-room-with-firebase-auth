import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Resister from "../Pages/Resister";
import Book from "../Pages/Book";
import PrivateRoute from "../Pages/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/resister',
                element: <Resister />
            },
            {
                path: '/book',
                element: <PrivateRoute><Book /></PrivateRoute>
            }
        ]
    }
])
export default router;