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
import PrivateRoute from "./PrivateRoute";
import IsLoged from "./IsLoged";

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
                element: (
                    <PrivateRoute>
                        <MyFoodItem />
                    </PrivateRoute>
                ),
            },
            {
                path: "/add-food",
                element: (
                    <PrivateRoute>
                        <AddFood />
                    </PrivateRoute>
                ),
            },
            {
                path: "/my-ordered-food",
                element: (
                    <PrivateRoute>
                        <MyOrderedFood />
                    </PrivateRoute>
                ),
            },
            {
                path: "/food/:id",
                element: <SingleFood />,
            },
            {
                path: "/purchase/:id",
                element: (
                    <PrivateRoute>
                        <Purchase />
                    </PrivateRoute>
                ),
            },
            {
                path: "/update/:id",
                element: (
                    <PrivateRoute>
                        <UpdateItem />
                    </PrivateRoute>
                ),
            },
            {
                path: "/login",
                element: (
                    <IsLoged>
                        <Login />
                    </IsLoged>
                ),
            },
            {
                path: "/register",
                element: (
                    <IsLoged>
                        <Register />
                    </IsLoged>
                ),
            },
        ],
    },
]);

export default Router;
