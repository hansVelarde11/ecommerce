import { Link, useNavigate } from "react-router-dom";
import { deleteToken, token } from "../../../helpers/auth";
import { UserContext } from "../../../context/UserContext";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const MainMenu = () => {

  const nav = useNavigate()
  const {userData, setUserData} = useContext(UserContext)
  const { state } = useContext(CartContext)

  const handleSession = () => {
    deleteToken();
    setUserData();
    nav("/")
  };

  return (
    <nav className="w-full">
      <ul className="flex justify-end">
        <li className="flex items-center">
          <Link className="menu-item" to="/">
            Inicio
          </Link>
        </li>
        <li className="flex items-center">
          <Link className="menu-item" to="/productos">
            Productos
          </Link>
        </li>
        <li className="flex items-center">
            <Link className="menu-item" to="/carrito">Carrito ({state.cart.length})</Link>
          </li>

        {!token() ? (
          <li className="flex items-center">
            <Link className="menu-item" to="/login">
              Iniciar Sesion
            </Link>
          </li>
        ) : (
          <>
          {userData?.is_admin && (<li className="flex items-center">
            <Link className="menu-item" to="/admin/productos">
              Administrar Productos
            </Link>
          </li>)}
          <li className="flex items-center">
            <Link className="menu-item" to="/perfil">
              Perfil
            </Link>
          </li>
          <li className="flex items-center">
            <a onClick={handleSession} className="menu-item cursor-pointer">
              Cerrar Sesion
            </a>
          </li>
          </>
        )}

      </ul>
    </nav>
  );
};

export default MainMenu;
