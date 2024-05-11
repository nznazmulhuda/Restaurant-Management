import {
    AddFood,
    AllFood,
    ErrorPage,
    Gallery,
    Home,
    Login,
    MyFoodItem,
    MyOrderedFood,
    Purchase,
    Register,
    SingleFood,
    UpdateItem,
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
                path: "/my-food-item",
                element: <MyFoodItem />,
            },
            {
                path: "/add-food",
                element: <AddFood />,
            },
            {
                path: "/my-ordered-food",
                element: <MyOrderedFood />,
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
                path: "/update/:id",
                element: <UpdateItem />,
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
