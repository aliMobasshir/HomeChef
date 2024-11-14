import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import About from "./components/About.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path : "/About",
        element: <About />,
    }
]);


ReactDOM.createRoot(document.getElementById("root")).
    render(<RouterProvider router={router} />);
