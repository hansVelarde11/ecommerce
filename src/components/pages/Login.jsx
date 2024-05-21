import Axios from "axios";
import { API_URL } from "../../constants/env";
import { setToken } from "../../helpers/auth";
import { useNavigate, Link } from "react-router-dom"
import { useContext, useState } from "react";
import LoginTemplate from "../templates/LoginTemplate";
import { UserContext } from "../../context/UserContext";

const Login = () => {

    const nav = useNavigate()
    const { setUserData } = useContext(UserContext);
    const [error, seterror] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    seterror()

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    Axios
      .post(`${API_URL}/public/login`, data)
      .then((response) => {
        console.log(data);
        setToken(response.data.data.token)
        setUserData(response.data.data.user);
        nav("/")
        
      })
      .catch((error) => {
        console.log(data)
        seterror (error)
      }
        );
  };
   
  return (
    <LoginTemplate title="Iniciar sesión">
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <input className="w-full"
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            required
            />
        </div>
        <div className="mb-4">
            <input className="w-full"
            type="password"
            name="password"
            placeholder="Contraseña"
            required
            />
        </div>
        
        <div className="text-center pt-1 mb-12 pb-1">
        <button className="bg-gradient w-full" type="submit">Ingresar</button>
        <Link className="text-gray-500" to="/registro">¿Deseas registrarte?</Link>
        </div>
        {error && (
            <p className="text-center p-2 bg-red-100 text-red-800">{error?.response?.data?.data}</p>
        )}
      </form>
    </LoginTemplate>
  );
};

export default Login;
