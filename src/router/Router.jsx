import { createBrowserRouter } from "react-router-dom";
import Error404 from "../components/pages/Error404";
import Home from "../components/pages/Home";
import Products from "../components/pages/Products";
import App from "../components/templates/App";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement : <Error404></Error404>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/productos",
                element: <Products></Products>
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/registro",
        element: <Register></Register>
    }
])

export default router