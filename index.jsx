import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
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
]);


ReactDOM.createRoot(document.getElementById("root")).
    render(<RouterProvider router={router} />);
