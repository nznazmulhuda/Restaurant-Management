import {
    AllFood,
    ErrorPage,
    Gallery,
    Home,
    Login,
    Purchase,
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
                path: "/food/:id",
                element: <SingleFood />,
            },
            {
                path: "/purchase/:id",
                element: <Purchase />,
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
