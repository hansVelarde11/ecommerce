import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <div className="logo flex">
        <Link to="/">
        <img className="rounded-md" src="https://i.pinimg.com/736x/28/f1/a9/28f1a972e13e4281b5273891ead173eb.jpg" alt="Logo eCommerce" width={50}  />
        </Link>
    </div>
  )
}

export default Logo