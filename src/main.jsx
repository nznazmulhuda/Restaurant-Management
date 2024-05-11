import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./Context/AuthProvider.jsx";
import Router from "./Router/Router.jsx";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import "rsuite/dist/rsuite.min.css";
import TanstackQuery from "./Tanstack/TanstackQuery.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <TanstackQuery>
            <AuthProvider>
                <HelmetProvider>
                    <RouterProvider router={Router} />
                    <Toaster />
                </HelmetProvider>
            </AuthProvider>
        </TanstackQuery>
    </React.StrictMode>
);
