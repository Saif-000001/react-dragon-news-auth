import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Layouts/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/Shared/NewsBody/NewsDetails";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path:"/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children:[
           {
            path:"/",
            element: <Home />,
            loader: () => fetch('/news.json'),
           },
           {
            path: "/news/:id",
            element: <PrivateRoute><NewsDetails /></PrivateRoute>,
            loader: () => fetch('/news.json')
           },
           {
            path: "/login",
            element: <Login />
           },
           {
            path: "/register",
            element: <Register />
           }
        ]
    }
])

export default router;