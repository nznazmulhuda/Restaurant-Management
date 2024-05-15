import "animate.css";
import "./index.css";
import AOS from "aos";
import axios from "axios";
import React from "react";
import "aos/dist/aos.css";
import "rsuite/dist/rsuite.min.css";
import ReactDOM from "react-dom/client";
import Router from "./Router/Router.jsx";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Context/AuthProvider.jsx";
import TanstackQuery from "./Tanstack/TanstackQuery.jsx";

AOS.init();
axios.defaults.baseURL =
    "https://b9a11-server-side-nznazmulhuda-main.vercel.app";
// axios.defaults.baseURL = "http://localhost:5000";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* Tanstack Query */}
        <TanstackQuery>
            <AuthProvider>
                {/* HelmetProvider for dynamic title */}
                <HelmetProvider>
                    {/* Router provider for routes */}
                    <RouterProvider router={Router} />
                    <Toaster />
                </HelmetProvider>
            </AuthProvider>
        </TanstackQuery>
    </React.StrictMode>
);
