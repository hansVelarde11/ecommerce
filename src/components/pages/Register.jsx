import Axios from "axios";
import { API_URL } from "../../constants/env";
import LoginTemplate from "../templates/LoginTemplate";
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react";

function Register() {
    
    const nav = useNavigate()

    const [error, seterror] = useState()

    const handleSubmit = (e)=>{
        e.preventDefault();
        seterror()

        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
            details:{
                fullname: e.target.fullname.value
            }
        }

        Axios
            .post(`${API_URL}/public/users`, data)
            .then(()=>{
                nav("/login")
                console.log(data);
            })
            .catch((error)=>{
                console.log(data);
                seterror(error)
                console.log(error);
            })
    }


  return (
    <LoginTemplate title={"Registro"}>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input className="w-full"
            type="text"
            placeholder="Nombre completo"
            name="fullname"
            required
          />
        </div>
        <div className="mb-4">
          <input className="w-full"
            type="email"
            placeholder="Correo electrónico"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <input className="w-full"
            type="password"
            placeholder="Contraseña"
            name="password"
            required
          />
        </div>
        <div className="text-center pt-1 mb-12 pb-1">
          <button className="bg-gradient w-full" type="submit">
            Crear cuenta
          </button>
          <Link className="text-gray-500" to="/login">
            ¿Ya tienes cuenta? Inicia sesión
          </Link>
        </div>
        {error && (
          <p className="text-center p-2 bg-red-100 text-red-800">
            {error?.response?.data.errors[0].message}
          </p>
        )}
      </form>
    </LoginTemplate>
  )
}

export default Register