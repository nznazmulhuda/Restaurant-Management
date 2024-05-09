import {
    AllFood,
    ErrorPage,
    Gallery,
    Home,
    Login,
    Register,
    SingleFood,
} from "../Pages";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/foods",
                element: <AllFood />,
            },
            {
                path: "/gallery",
                element: <Gallery />,
            },
            {
                path: "/food",
                element: <SingleFood />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

export default Router;
