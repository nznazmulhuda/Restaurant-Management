import {
    AddFood,
    AllFood,
    ErrorPage,
    Event,
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
                path: "/food/:id",
                element: <SingleFood />,
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
            {
                path: "/event",
                element: (
                    <IsLoged>
                        <Event />
                    </IsLoged>
                ),
            },
        ],
    },
]);

export default Router;
