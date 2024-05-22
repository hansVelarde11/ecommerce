import { createBrowserRouter } from "react-router-dom";
import Error404 from "../components/pages/Error404";
import Home from "../components/pages/Home";
import Products from "../components/pages/Products";
import App from "../components/templates/App";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Form from "../components/pages/admin/products/Form";
import Table from "../components/pages/admin/products/Table";
import Admin from "../components/templates/Admin";
import Product from "../components/pages/Product";
import Cart from "../components/pages/Cart";
import Payment from "../components/pages/Payment";
import Profile from "../components/pages/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error404></Error404>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/productos",
        element: <Products></Products>,
      },
      {
        path: "/productos/:id",
        element: <Product></Product>,
      },
      {
        path: "/carrito",
        element: <Cart></Cart>
      },
      {
        path: "/pago-exitoso",
        element: <Payment></Payment>
      },
      {
        path: "/perfil",
        element: <Profile></Profile>
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registro",
    element: <Register></Register>,
  },
  {
    path: "/admin",
    element: <Admin></Admin>,
    children: [
      {
        path: "/admin/productos",
        element: <Table></Table>,
      },
      {
        path: "/admin/productos/crear",
        element: <Form></Form>,
      },
      {
        path: "/admin/productos/editar/:id",
        element: <Form></Form>,
      },
    ],
  },
]);

export default router;
