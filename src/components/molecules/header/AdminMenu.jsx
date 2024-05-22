import { Link, useNavigate } from "react-router-dom";
import { deleteToken, token } from "../../../helpers/auth";

const AdminMenu = () => {
  return (
    <nav className="w-full">
      <ul className="flex justify-end">
        <li className="flex items-center">
          <Link className="menu-item" to="/productos">
            Productos
          </Link>
        </li>
        <li className="flex items-center">
          <Link className="menu-item" to="/">
            Volver a la app
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminMenu;
