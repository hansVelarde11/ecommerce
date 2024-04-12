import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <div className="logo flex">
        <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/EDteam-logo-fondo-blanco.svg/2560px-EDteam-logo-fondo-blanco.svg.png" alt="Logo eCommerce" width={100}  />
        </Link>
    </div>
  )
}

export default Logo